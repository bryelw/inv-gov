document.addEventListener('DOMContentLoaded', function() {
    populateFamilyMembersDropdown();
});

function populateFamilyMembersDropdown() {
    const users = [
        { title: 'Mr', firstName: 'John', lastName: 'Doe', dob: '1970-11-04' },
        { title: 'Mrs', firstName: 'Jane', lastName: 'Doe', dob: '1974-01-09' },
        { title: 'Mr', firstName: 'Jake', lastName: 'Doe', dob: '2009-02-04' }
    ];
    const userSelectDropdown = document.getElementById('userSelect');

    users.forEach((user, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${user.title} ${user.firstName} ${user.lastName}`;
        userSelectDropdown.appendChild(option);
    });
}

function autoFillForm() {
    const users = [
        { title: 'Mr', firstName: 'John', lastName: 'Doe', dob: '1970-11-04' },
        { title: 'Mrs', firstName: 'Jane', lastName: 'Doe', dob: '1974-01-09' },
        { title: 'Mr', firstName: 'Jake', lastName: 'Doe', dob: '2009-02-04' }
    ];
    const selectedUserIndex = document.getElementById('userSelect').value;
    if (selectedUserIndex === '') {
        return; // No user selected
    }

    const user = users[selectedUserIndex];
    document.getElementById('title').value = user.title;
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('dob').value = user.dob;
}
