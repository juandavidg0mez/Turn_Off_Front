console.log("Estamos activo")

const loadSurveys = () => {
    fetch('http://localhost:8080/auth/Surveys/All')
        .then(response => response.json())
        .then(data => {
            // Llama a la función para procesar y mostrar los datos
            displaySurveys(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching surveys:', error);
        });
};

const displaySurveys = (surveys) => {
    const container = document.querySelector('#surveyChart');
    container.innerHTML = ''; // Limpia el contenido actual del div

    surveys.forEach(survey => {
        // Crea un elemento para cada encuesta
        const surveyElement = document.createElement('div');
        surveyElement.innerHTML = `
        <div class="column">
        <div class="card"   id=${survey.id} >
            <div class="card-content">
                <p class="title" contenteditable="false" >
                ${survey.name}
                </p>
                <p class="subtitle" contenteditable="flase">${survey.description}<</p>
            </div>
            <footer class="card-footer">
                <button class="button is-dark card-footer-item openSurvey"  data-id=${survey.id}  >Open</button>
                <button class="button is-dark card-footer-item editSurvey"  data-id=${survey.id} >Edit</button>
                <button class="button is-danger card-footer-item deleteSurvey" data-id=${survey.id} >Delete</button>
            </footer>
        </div>  
        </div>
            
        `;
        container.appendChild(surveyElement);
    });

    document.querySelectorAll('.deleteSurvey').forEach(button => {
        button.addEventListener('click', function(event) {
            const surveyId = event.target.getAttribute('data-id');
            deleteSurvey(surveyId);
            console.log('butom')
        });
    });
};
const deleteSurvey = (surveyId) => {
    fetch(`http://localhost:8080/auth/Surveys/delete/${surveyId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log(`Survey with ID ${surveyId} deleted`);
            loadSurveys(); // Vuelve a cargar las encuestas después de la eliminación
        } else {
            console.error('Error deleting survey');
        }

    })
    .catch(error => console.error('Error:', error));
};

document.addEventListener('DOMContentLoaded', loadSurveys);

