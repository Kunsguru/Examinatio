const examPasscode = 'exam2024'; // Define the passcode here

    function startExam() {
        let duration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
        setTimeout(submitExam, duration);
    }

    function submitExam() {
        document.getElementById('examForm').submit();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = document.getElementById('examForm');
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const matricNumber = formData.get('matric_number');
        const phone = formData.get('phone');

        // Collect all selected answers
        const answers = {};
        const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6','q7', 'q8', 'q9','q10', 'q11', 'q12','q13', 'q14', 'q15','q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23', 'q24','q25', 'q26', 'q27','q29', 'q30', 'q31','q32', 'q33', 'q34','q35', 'q36', 'q37','q38', 'q39', 'q40','q41', 'q42', 'q43','q44', 'q45', 'q46','q47', 'q48', 'q49','q50']; // Add more question names here as needed
        questions.forEach(question => {
            answers[question] = formData.get(question);
        });

        const adminEmail = 'mondaykingsley80@gmail.com';
        const subject = 'New Exam Submission';
        let body = `Student ${name} with matric number ${matricNumber} has submitted the exam.\n\n`;

        // Append answers to the body
        body += 'Answers:\n';
        questions.forEach(question => {
            body += `Question ${question.slice(1)}: ${answers[question]}\n`;
        });

        // Send email to admin
        window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Show confirmation to student
        alert('Your exam has been submitted. You will receive your results shortly.');
    }

    function unlockExam() {
        const enteredPasscode = document.getElementById('passcode').value;
        if (enteredPasscode === examPasscode) {
            document.getElementById('examSection').classList.remove('hidden');
            document.getElementById('passcodeSection').classList.add('hidden');
            startExam();
        } else {
            alert('Incorrect passcode. Please try again.');
        }
    }






