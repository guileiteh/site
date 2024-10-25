// Dados de exemplo: perguntas e respostas
const flashcardsData = [
    { question: "Qual é a capital da França?", answer: "Paris" },
    { question: "Qual é a maior montanha do mundo?", answer: "Monte Everest" },
    { question: "Qual o valor de π (pi)?", answer: "Aproximadamente 3,1416" },
    { question: "Quem escreveu 'Dom Quixote'?", answer: "Miguel de Cervantes" }
  ];
  
  // Função para criar os flashcards
  function createFlashcards() {
    const container = document.getElementById("flashcardContainer");
  
    flashcardsData.forEach(data => {
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
  
      const flashcardInner = document.createElement("div");
      flashcardInner.classList.add("flashcard-inner");
  
      const flashcardFront = document.createElement("div");
      flashcardFront.classList.add("flashcard-front");
      flashcardFront.textContent = data.question;
  
      const flashcardBack = document.createElement("div");
      flashcardBack.classList.add("flashcard-back");
      flashcardBack.textContent = data.answer;
  
      flashcardInner.appendChild(flashcardFront);
      flashcardInner.appendChild(flashcardBack);
      flashcard.appendChild(flashcardInner);
      container.appendChild(flashcard);
  
      // Evento de clique para girar o flashcard
      flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flip");
      });
    });
  }
  
  // Inicializar os flashcards
  createFlashcards();
  