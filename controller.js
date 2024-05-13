
document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select'); // Ajout de la sélection de catégorie
    const task = taskInput.value.trim();
    const category = categorySelect.value; // Récupérer la catégorie sélectionnée
    console.log('Controller:'+ task +' '+category)
    if (task !== '') {
        advancedModel.addTask({task, category}); // Utilisation du modèle avancé pour ajouter la tâche et la catégorie
        renderTasks(advancedModel.tasks); // Affichage des tâches mises à jour
        taskInput.value = '';
    }
});

    
