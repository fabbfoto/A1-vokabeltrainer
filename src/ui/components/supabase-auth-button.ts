import { supabaseAuth } from '../../services/supabase';

export function createAuthButton(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const button = document.createElement('button');
  button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2';
  
  async function updateButton() {
    const user = await supabaseAuth.getUser();
    
    if (user) {
      button.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
        </svg>
        <span>${user.email}</span>
        <span class="text-sm opacity-75">(Abmelden)</span>
      `;
      button.onclick = async () => {
        if (confirm('Wirklich abmelden?')) {
          await supabaseAuth.signOut();
          updateButton();
        }
      };
    } else {
      button.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"/>
        </svg>
        <span>Mit Google anmelden</span>
      `;
      button.onclick = () => supabaseAuth.signInWithGoogle();
    }
  }

  // Initial und bei Auth-Änderungen updaten
  updateButton();
  supabaseAuth.onAuthStateChange(() => updateButton());

  container.appendChild(button);
} 