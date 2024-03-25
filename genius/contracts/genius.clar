(impl-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))

;; No maximum supply!
(define-fungible-token Genius-coin)

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq tx-sender sender) err-not-token-owner)
    (try! (ft-transfer? Genius-coin amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)
  )
)

(define-read-only (get-name)
  (ok "Genius Coin")
)

(define-read-only (get-symbol)
  (ok "GEL")
)

(define-read-only (get-decimals)
  (ok u6)
)

(define-read-only (get-balance (who principal))
  (ok (ft-get-balance Genius-coin who))
)

(define-read-only (get-total-supply)
  (ok (ft-get-supply Genius-coin))
)

(define-read-only (get-token-uri)
  (ok none)
)

(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender contract-owner) err-owner-only)
    (ft-mint? Genius-coin amount recipient)
  )
)
(define-public (quiz-state)
  (map (int u256))
)

(define-public (create-quiz (quiz-id int) (quiz-questions (list (tuple (question text) (options (list text)) (correct-answer int)))) (entrance-fee uint))
  (if (verify-unique-quiz-id quiz-id)
      (map-set (quiz-state) (to-principal tx-sender) (tuple (quiz quiz-questions) (entrance-fee entrance-fee)))
      (err "Quiz ID already exists")
  )
)

(define-read-only (verify-unique-quiz-id (quiz-id int))
  (is-none (map-get (quiz-state) (int-to-principal quiz-id)))
)

(define-public (enter-quiz (quiz-id int) (answers (list int)))
  (let ((organizer (get-quiz-organizer quiz-id))
        (quiz (get-quiz quiz-id)))
    (if (none? organizer)
        (ok false)
        (let ((participant (to-principal tx-sender)))
          (if (verify-entrance-fee quiz-id)
              (begin
                ;; Update quiz results
                (map-set (quiz-state) organizer (update-quiz-results quiz answers))
                ;; Start the quiz by setting the start time or any other necessary logic
                (ok true))
              (ok false)
            )
          )
        )
    )
)

(define-public (join-and-start-quiz (quiz-id int) (answers (list int)))
  (let ((organizer (get-quiz-organizer quiz-id))
        (quiz (get-quiz quiz-id)))
    (if (none? organizer)
        (ok false)  
        (let ((participant (to-principal tx-sender)))
          (if (verify-entrance-fee quiz-id)
              (begin
                ;; Update quiz results
                (map-set (quiz-state) organizer (update-quiz-results quiz answers))
                ;; Start the quiz by setting the start time or any other necessary logic
                (ok true))
              (ok false)
            )
          )
        )
    )
)

(define-read-only (get-quiz-organizer (quiz-id int))
  (match (map-get (quiz-state) (int-to-principal quiz-id))
    ((ok organizer) organizer)
    ((err ) none)
  )
)

(define-read-only (get-quiz (quiz-id int))
  (match (map-get (quiz-state) (int-to-principal quiz-id))
    ((ok quiz) (tuple-get quiz "quiz"))
    ((err ) none)
  )
)

(define-read-only (verify-entrance-fee (quiz-id int))
  (let ((quiz (get-quiz quiz-id)))
    (if (is-none quiz)
        false
        (let ((entrance-fee (tuple-get quiz "entrance-fee")))
          (if (is-none entrance-fee)
              false
              (let ((caller-balance (get-balance (caller))))
                (if (is-none caller-balance)
                    false
                    (if (>= (unwrap-uint caller-balance) (unwrap-uint entrance-fee))
                        true
                        false
                      )
                  )
                )
              )
          )
      )
  )
)

(define-private (update-quiz-results (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))) (answers (list int)))
  (let ((correct-answers (count-correct-answers quiz answers)))
    (append correct-answers (list (length quiz)))
  )
)

(define-private (count-correct-answers (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))) (answers (list int)))
  (map (lambda (question correct-answer)
         (if (is-eq (get-answer answers question) correct-answer) 1 0)
       )
       quiz
       (get-correct-answers quiz)
  )
)

(define-private (get-answer (answers (list int)) (question (tuple (question text) (options (list text)) (correct-answer int))))
  (at-idx answers (get-index (tuple-get question "question") (tuple-map (tuple-get question "options") (ok 0))))
)

(define-private (get-index (element any) (list (list-of any)))
  (match (list-find (lambda (x) (is-eq x element)) list)
    ((some index) index)
    ((none) -1)
  )
)

(define-private (get-correct-answers (quiz (list (tuple (question text) (options (list text)) (correct-answer int)))))
  (map (lambda (question) (tuple-get question "correct-answer")) quiz)
)
