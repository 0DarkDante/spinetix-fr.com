  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question-button-js').forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('open');
      });
    });
  });
