function addFamilyMember() {
    const title = document.getElementById('title').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;

    let familyMembers = JSON.parse(localStorage.getItem('familyMembers')) || [];
    familyMembers.push({ title, firstName, lastName, dob });
    localStorage.setItem('familyMembers', JSON.stringify(familyMembers));

    alert("Family member added successfully!");
    document.getElementById('familyMemberForm').reset(); // Reset form fields after submission
}

// Load existing family members to a list or table if necessary
// This part is optional and can be implemented based on your UI/UX needs
