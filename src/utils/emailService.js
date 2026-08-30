import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const sendContactEmail = (e, formRef, setLoading) => {
    e.preventDefault();

    const form = formRef.current;
    const nameInput = form.querySelector('#name');
    const phoneInput = form.querySelector('#phone');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    // Validation
    if (!nameInput.value.trim()) {
        Swal.fire({ icon: "error", title: "Empty", text: "Please enter your Name." });
        nameInput.style.border = '2px solid red';
        return;
    }

    if (!phoneInput.value.trim()) {
        Swal.fire({ icon: "error", title: "Empty", text: "Please enter your Phone Number." });
        phoneInput.style.border = '2px solid red';
        return;
    }

    if (!emailInput.value.trim()) {
        Swal.fire({ icon: "error", title: "Empty", text: "Please enter your Email." });
        emailInput.style.border = '2px solid red';
        return;
    }

    if (!messageInput.value.trim()) {
        Swal.fire({ icon: "error", title: "Empty", text: "Please enter your Message." });
        messageInput.style.border = '2px solid red';
        return;
    }

    // Reset borders
    nameInput.style.border = '';
    phoneInput.style.border = '';
    emailInput.style.border = '';
    messageInput.style.border = '';

    setLoading(true);

    // Proper chaining
    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ONE,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        // Send second email AFTER first succeeds
        return emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID_TWO,
            form,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
    })
    .then(() => {
        Swal.fire({
            icon: "success",
            title: "Thank you for contacting us!",
            text: "We appreciate your message and will get back to you soon.",
        });

        form.reset();
    })
    .catch((error) => {
        console.error(error);

        Swal.fire({
            icon: "warning",
            title: "Something went wrong",
            text: "We are experiencing technical issues. Please try again later.",
        });
    })
    .finally(() => {
        setLoading(false);
    });
};