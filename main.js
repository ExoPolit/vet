const dropdowns = document.querySelectorAll('.faq__dropdown');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      // Close all other open dropdowns
      dropdowns.forEach((dropdown) => {
        const otherCheckbox = dropdown.querySelector('input[type="checkbox"]');
        if (otherCheckbox !== this && otherCheckbox.checked) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});