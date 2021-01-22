const Modal = {
    open(){
      // Abrir modal
      // Adicionar a class active ao modal
      document.querySelector('.modal-overlay')
              .classList
              .add('active')
    },
    close(){
      // Fechar o mal
      // Remover a classe active do modal
      document.querySelector('.modal-overlay')
              .classList
              .remove('active')
    }
  }