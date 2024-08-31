export function showToast(operation, id) {
    const toast = document.createElement('div');
    toast.classList.add('toast');

    if (operation === 'add') {
        toast.textContent = `Product with id ${id} has been added to cart`;
    }
    else {
        toast.textContent = `Product with id ${id} has been removed form cart`;
    }
    document.body.appendChild(toast);

    setTimeout(() => { toast.remove() }, 5000);

};