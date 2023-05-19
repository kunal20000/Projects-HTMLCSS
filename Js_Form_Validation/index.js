function ageChange(event) {
    event.preventDefault();
    const input1 = document.getElementById('q_age');
    const errorHolder = document.getElementById('errors-holder');
    const button1 = document.querySelector('button');
    if (parseInt(input1.value) < 5) {
        //select div error holder

        // add content to it
        errorHolder.textContent = 'You need to be atleast 5 years old to participate';

        button1.disabled = true;
    } else {
        errorHolder.textContent = '';
        button1.disabled = false;
    }


}

function handleSubmit(event) {
    event.preventDefault();
    const input2 = document.getElementById('q_age');
    const errorHolder = document.getElementById('errors-holder');
    const checkBox = document.getElementById('q_owns_phone');
    const resultHolder = document.getElementById('result-holder');

    if (parseInt(input2.value) == 0) {
        errorHolder.textContent = 'Please choose age';
        resultHolder.textContent = '';
        return;

    } else {
        errorHolder.textContent = '';
    }
    if (checkBox.checked ) {
        if (parseInt(input2.value) < 13) {

            resultHolder.textContent = 'You are too young to have a phone';

        }
        else
        {
            resultHolder.textContent = 'Use your phone in moderation';
        }
    } else {
        if (parseInt(input2.value) < 13) {
            resultHolder.textContent = 'You will get a phone soon';
        } else {
            resultHolder.textContent = 'You should get a phone';
        }
    }

}