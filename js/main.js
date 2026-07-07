(function() {
  const simulateBtn = document.getElementById('simulateBtn');
  const userSelect = document.getElementById('userSelect');
  const actionSelect = document.getElementById('actionSelect');
  const feedback = document.getElementById('simulationFeedback');

  const permissions = {
    'Aluno': ['Ver notas', 'Ver frequência', 'Excluir dados'],
    'Professor': ['Ver notas', 'Ver frequência', 'Excluir dados'],
    'Coordenador': ['Ver relatórios', 'Gerenciar professores', 'Fazer chamada', 'Excluir dados']
  };

  const riskyActions = {
    'Aluno': ['Excluir dados', 'Editar notas'],
    'Professor': [],
    'Coordenador': []
  };

  function runSimulation(user, action) {
    const userPerms = permissions[user] || [];
    const hasPermission = userPerms.includes(action);

    let accessGranted = false;
    let isRisk = false;

    if (action === 'Ver notas' || action === 'Ver frequência') {
      accessGranted = true;
      isRisk = false;
    }
    
    else if (action === 'Fazer chamada' && user === 'Aluno') {
      accessGranted = false;
      isRisk = false;
    }
    
    else if ((action === 'Ver relatórios' || action === 'Gerenciar professores') && user !== 'Coordenador') {
      accessGranted = false;
      isRisk = false;
    }
    
    else if (action === 'Editar notas') {
      if (user === 'Professor' || user === 'Coordenador') {
        accessGranted = true;
        isRisk = false;
      } else if (user === 'Aluno') {
        accessGranted = true;
        isRisk = true;
      }
    }
    
    else if (action === 'Excluir dados') {
      if (hasPermission) {
        accessGranted = true;
        if (user === 'Aluno') {
          isRisk = true;
        } else {
          isRisk = false;
        }
      } else {
        accessGranted = false;
        isRisk = false;
      }
    }
    else {
      accessGranted = hasPermission;
      if (accessGranted && riskyActions[user] && riskyActions[user].includes(action)) {
        isRisk = true;
      }
    }

    let html = '';
    if (accessGranted && isRisk) {
      html = `<span class="text-danger fw-bold"><i class="bi bi-x-circle-fill me-1"></i> ACESSO PERMITIDO (RISCO!)</span><br>
              <span class="text-muted-light">O usuário <strong>${user}</strong> conseguiu executar a ação <strong>"${action}"</strong>. Isso representa um risco de segurança.</span>
              <div class="mt-2"><span class="badge bg-warning bg-opacity-10 text-dark border-0">Como corrigir: Revise as permissões da função ${user} e remova acessos desnecessários.</span></div>`;
    } else if (accessGranted && !isRisk) {
      html = `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i> ACESSO PERMITIDO (seguro)</span><br>
              <span class="text-muted-light">O usuário <strong>${user}</strong> tem permissão para <strong>"${action}"</strong> de acordo com o princípio do menor privilégio.</span>`;
    } else {
      html = `<span class="text-secondary fw-bold"><i class="bi bi-ban me-1"></i> ACESSO NEGADO</span><br>
              <span class="text-muted-light">O usuário <strong>${user}</strong> NÃO tem permissão para <strong>"${action}"</strong>. Acesso bloqueado.</span>`;
    }
    feedback.innerHTML = html;
  }

  if (simulateBtn) {
    simulateBtn.addEventListener('click', function() {
      const user = userSelect.value;
      const action = actionSelect.value;
      runSimulation(user, action);
    });
  }

  runSimulation('Aluno', 'Excluir dados');

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