const form = document.forms.creditForm;
const fieldsForValidation = [...form.elements].filter(element
=> element.type !== 'submit');
const installmentsPeriod = document.getElementById('installmentsPeriod');
form.elements.installments.addEventListener('input', e => {
installmentsPeriod.textContent = e.target.value;
});
form.addEventListener('submit', e => {
e.preventDefault();
if (form.checkValidity()) {
sendCreditForm();
} else {
fieldsForValidation.forEach(field
=> setFieldErrorHintVisibility(field));
}
});
fieldsForValidation.forEach(field => {
field.addEventListener('input', e =>
setFieldErrorHintVisibility(e.target));
});
function setFieldErrorHintVisibility(field) {
const errorHint = document.querySelector(`[data-error="${field.name}"]`);
if (!errorHint) {
return;
}
if (field.type !== 'radio') {
const isElementValid = form.elements[field.name].checkValidity();
errorHint.classList.toggle('hidden', isElementValid);
} else {
const radios = [...form.elements[field.name]];
const isRadioRequired = radios.some(radio => radio.required);
if (isRadioRequired) {
const isSomeRadioChecked = radios.some(radio => radio.checked);
errorHint.classList.toggle('hidden', isSomeRadioChecked);
}
}
}
function getFormData() {
const data = {};
const formData = [... new FormData(form).entries()];
formData.forEach(([fieldName, fieldValue]) => {
data[fieldName] = fieldValue;
});
return data;
}
function sendCreditForm() {
axios.post('/save-credit-form', getFormData())
.then(response => {/* wysyłka zakończona sukcesem */})
.catch(() => {/* wystąpił błąd */});
}
