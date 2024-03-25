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

(define-data-var quiz-prize-pool (get-quiz-prize-pool) u128)

(define-data-var quiz-participants (get-quiz-participants) 
  (list (tuple (participant (address)) (correct-answers int))))

(define-public (create-quiz (prize-pool uint))
  (ok (set-quiz-prize-pool prize-pool)))

(define-public (join-quiz (participant (address)) (entrance-fee uint))
  (if (>= (get-balance participant) entrance-fee)
    (begin
      (transfer (contract-caller) entrance-fee)
      (set-quiz-participants (append (get-quiz-participants) (tuple (participant participant) (correct-answers 0))))
      (ok true))
    (err "Insufficient funds to join quiz")))

(define-public (answer-quiz (participant (address)) (answers int))
  (ok
    (map
      (lambda (p)
        (if (eq? (tuple-get p participant) participant)
          (tuple-set p correct-answers (+ (tuple-get p correct-answers) answers))
          p))
      (get-quiz-participants))))

(define-public (distribute-rewards)
  (let ((total-answers 0)
        (winners (filter
                   (lambda (p)
                     (>= (tuple-get p correct-answers) 0)) ;; Change this condition based on quiz logic
                   (get-quiz-participants))))
    (for-each
      (lambda (winner)
        (set total-answers (+ total-answers (tuple-get winner correct-answers))))
      winners)
    (map
      (lambda (winner)
        (transfer (tuple-get winner participant)
                  (udiv (* (get-quiz-prize-pool) (tuple-get winner correct-answers)) total-answers)))
      winners)
    (set-quiz-participants (list))
    (ok true)))
