(define-data-var game-state (game (map game-id (tuple (quiz (list (tuple (question text) (options (list text)) (correct-answer int))) (entrance-fee uint))))))

(define-public (create-quiz (quiz-id int) (quiz-questions (list (tuple (question text) (options (list text)) (correct-answer int)))) (entrance-fee uint))
  (if (verify-unique-quiz-id quiz-id)
    (map-set game-state.game (to-principal tx-sender) (tuple (quiz quiz-questions) (entrance-fee entrance-fee)))
    (err "Quiz ID already exists")))

(define-read-only (verify-unique-quiz-id (quiz-id int))
  (is-none (map-get game-state.game (int-to-principal quiz-id))))

(define-public (enter-quiz (quiz-id int) (answers (list int)))
  (let ((organizer (get-quiz-organizer quiz-id))
        (quiz (get-quiz quiz-id)))
    (if (none? organizer)
      (ok false)  ; Organizer not found
      (let ((participant (to-principal tx-sender)))
        (if (verify-entrance-fee quiz-id)
          (begin
            ; Update quiz results
            (map-set game-state.game organizer (update-quiz-results quiz answers))
            ; Start the quiz by setting the start time or any other necessary logic
            (ok true))
          (ok false))))))

(define-public (join-and-start-quiz (quiz-id int) (answers (list int)))
  (let ((organizer (get-quiz-organizer quiz-id))
        (quiz (get-quiz quiz-id)))
    (if (none? organizer)
      (ok false)  ; Organizer not found
      (let ((participant (to-principal tx-sender)))
        (if (verify-entrance-fee quiz-id)
          (begin
            ; Update quiz results
            (map-set game-state.game organizer (update-quiz-results quiz answers))
            ; Start the quiz by setting the start time or any other necessary logic
            (ok true))
          (ok false))))))

(define-read-only (get-quiz-organizer (quiz-id int))
  (match (map-get game-state.game (int-to-principal quiz-id))
    ((ok organizer) organizer)
    ((err _) none)))

(define-read-only (get-quiz (quiz-id int))
  (match (map-get game-state.game (int-to-principal quiz-id))
    ((ok quiz) (tuple-get quiz 'quiz))
    ((err _) none)))

(define-read-only (verify-entrance-fee (quiz-id int))
  (let ((quiz (get-quiz quiz-id)))
    (if (is-none quiz)
      false
      (let ((entrance-fee (tuple-get quiz 'entrance-fee)))
        (if (is-none entrance-fee)
          false
          (let ((caller-balance (get-balance (caller))))
            (if (is-none caller-balance)
              false
              (if (>= (unwrap-uint caller-balance) (unwrap-uint entrance-fee))
                true
                false))))))))

(define-private (update-quiz-results (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))) (answers (list int)))
  (let ((correct-answers (count-correct-answers quiz answers)))
    (append correct-answers (list (length quiz)))))

(define-private (count-correct-answers (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))) (answers (list int)))
  (map (lambda (question correct-answer)
         (if (= (get-answer answers question) correct-answer) 1 0))
       quiz
       (get-correct-answers quiz)))

(define-private (get-answer (answers (list int)) (question (tuple (question text) (options (list text)) (correct-answer int))))
  (at-idx answers (get-index (tuple-get question 'question) (tuple-map (tuple-get question 'options) (ok 0)))))

(define-private (get-index (element any) (list (list-of any)))
  (match (list-find (lambda (x) (= x element)) list)
    ((some index) index)
    ((none _) -1)))

(define-private (get-correct-answers (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))))
  (map (tuple-get _ correct-answer) quiz))
