const usersData = {
    "john.doe": [
        { name: "Passport Renewal", identifier: "Passport No. 123456789", expiryDate: "01/01/2025", renewalLink: "passport-renewal.html" },
        // ... other services for John Doe
    ],
    "jane.doe": [
        { name: "Driver's License", identifier: "License No. A1234567", expiryDate: "01/01/2024", renewalLink: "drivers-license-renewal.html" },
        // ... other services for Jane Doe
    ]
};

function loadUserData() {
    const currentUser = localStorage.getItem('currentUser');
    const servicesTableBody = document.getElementById('servicesTableBody');
    servicesTableBody.innerHTML = ''; // Clear existing content

    const userData = usersData[currentUser];

    if (userData) {
        userData.forEach(service => {
            const row = `<tr>
                            <td><i class="fas fa-service"></i> ${service.name}</td>
                            <td>${service.identifier}</td>
                            <td>${service.expiryDate}</td>
                            <td><a href="${service.renewalLink}"><button>Renew</button></a></td>
                         </tr>`;
            servicesTableBody.innerHTML += row;
        });

        // Add the 'Add Service' button row
        servicesTableBody.innerHTML += `
            <tr>
                <td colspan="4" class="text-center">
                    <a href="add-services.html"><button class="full-width-button"><i class="fas fa-plus"></i> Add Service</button></a>
                </td>
            </tr>`;
    }
}

window.onload = loadUserData;
