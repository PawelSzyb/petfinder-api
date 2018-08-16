// Validate Zipcode
export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

// Dipslay Error Message
export function showError(message, className) {
  const div = document.createElement("div");
  // Add class
  div.className = `alert alert-${className}`;
  //Add text
  div.textContent = message;
  // Get Container
  const container = document.querySelector(".container");
  // Get Form
  const form = document.querySelector("#pet-form");
  // Insert
  container.insertBefore(div, form);
  // Clear error
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
