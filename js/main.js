(function() {
  const simulateBtn = document.getElementById('simulateBtn');
  const userSelect = document.getElementById('userSelect');
  const actionSelect = document.getElementById('actionSelect');
  const feedback = document.getElementById('simulationFeedback');

  const permissions = {
    'Aluno': ['Ver notas', 'Ver frequência', 'Alterar notas'],
    'Professor': ['Ver notas', 'Ver frequência', 'Excluir dados'],
    'Coordenador': ['Ver relatórios', 'Gerenciar professores', 'Fazer chamada', 'Excluir dados']
  };

  const riskyActions = {
    'Aluno': ['Excluir dados', 'Editar notas'],
    'Professor': [],
    'Coordenador': []
  };

  const regenerateBtn = document.getElementById('regenerateBtn');
  if (regenerateBtn) {
    regenerateBtn.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="bi bi-arrow-repeat me-1 spinner-border spinner-border-sm"></i> Gerando...';
      this.disabled = true;
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
        const badgeArea = document.querySelector('.permission-badge.danger');
        if (badgeArea) {
          badgeArea.style.transition = 'background 0.3s';
          badgeArea.style.background = '#fee8e8';
          setTimeout(() => { badgeArea.style.background = ''; }, 300);
        }
      }, 800);
    });
  }

  const fixBtn = document.querySelector('.btn-outline-danger-custom');
  if (fixBtn) {
    fixBtn.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="bi bi-check2-circle me-1"></i> Corrigido!';
      this.style.background = '#d4edda';
      this.style.borderColor = '#b7d7b7';
      this.style.color = '#155724';
      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = '';
        this.style.borderColor = '';
        this.style.color = '';
      }, 2000);
    });
  }

  const goToFixBtn = document.querySelector('.attack-sim .btn-outline-primary-custom');
  if (goToFixBtn) {
    goToFixBtn.addEventListener('click', function() {
      const alertCard = document.querySelector('.alert-card');
      if (alertCard) {
        alertCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        alertCard.style.transition = 'box-shadow 0.3s';
        alertCard.style.boxShadow = '0 0 0 3px #dc3545';
        setTimeout(() => { alertCard.style.boxShadow = ''; }, 1500);
      }
    });
  }
})();