import maskPhone from './maskPhone';

const checkInputsAll = () => {

        const deleteHyphenSpace = str => {
            str = str.trim();
            str = str.replace(/ +/g, ' ');
            str = str.replace(/\-+/g, '\-');
            str = str.replace(/^-/g, '');
            str = str.replace(/-$/g, '');
            return str;
        };

        const inputsAll = document.querySelectorAll('input');

        inputsAll.forEach(item => {
            if (item.classList.contains('tel')) {
                item.setAttribute('required', true);
            }
            item.addEventListener('input', event => {
                if (event.target.name === 'fio') {
                    
                    const nameValue = event.target.value;
                    event.target.value = nameValue.replace(/[;\+\>\<\*\!\=\.@:\?\,#\$\%^\&\}{\[\]\^\"\\\|\/\_)(\w]/gi, '');
                    
                } else if (event.target.classList.contains('tel')) {

                    maskPhone('.' + event.target.classList[1]);
                }
            });

            item.addEventListener('blur', event => {
                if (event.target.name === 'fio') {

                    const nameValue = event.target.value;
                    event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();

                } else if (event.target.name === 'tel') {

                    event.target.value = deleteHyphenSpace(event.target.value);
                }
            });

        });


    };

export default checkInputsAll;