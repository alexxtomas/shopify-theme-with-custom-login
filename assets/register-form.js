document.addEventListener('DOMContentLoaded', () => {
  const tab = localStorage.getItem('tab');

  if (tab) {
    document.getElementById(tab).click();
  } else {
    document.getElementById('as_profesional_tab').click();
  }

  document.querySelectorAll('input[type="radio"]').forEach((tab) => {
    console.log('fsfksjk');
    tab.addEventListener('click', (e) => {
      const id = e.target.getAttribute('id');
      console.log({ id });
      localStorage.setItem('tab', id);
    });
  });
});
