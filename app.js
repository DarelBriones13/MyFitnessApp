// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Default Workout Data
const defaultWorkouts = {
    monday: {
        name: 'Upper',
        exercises: [
            { name: 'Bench Press', sets: '3×8–10', muscles: 'Chest, front shoulders, triceps', video: 'rT7DgCr-3pg' },
            { name: 'Incline Dumbbell Press', sets: '3×8–10', muscles: 'Upper chest, front shoulders', video: '8iPEnn-ltC8' },
            { name: 'Lat Pulldown / Cable Row', sets: '3×10–12', muscles: 'Lats, middle back, biceps', video: 'JEb-dwU3VF4' },
            { name: 'Barbell or Dumbbell Row', sets: '3×8–10', muscles: 'Back thickness, lats, biceps', video: 'I-qgwlP0J90' },
            { name: 'Dumbbell Shoulder Press', sets: '3×8–10', muscles: 'Front & side shoulders, triceps', video: 'qEwKCR5JCog' },
            { name: 'Lateral Raises', sets: '3×15', muscles: 'Side shoulders (shoulder width)', video: '3VcKaXpzqRo' },
            { name: 'Face Pull', sets: '3×12–15', muscles: 'Rear shoulders, upper back, posture', video: 'rep-qVOkqgk' },
            { name: 'Bicep Curl', sets: '3×12', muscles: 'Biceps', video: 'ykJmrZ5v0Oo' },
            { name: 'Tricep Pushdown', sets: '3×12', muscles: 'Triceps', video: '2-LAMcpzODU' }
        ]
    },
    tuesday: {
        name: 'Lower + Abs',
        exercises: [
            { name: 'Squat', sets: '3×8–10', muscles: 'Quads, glutes, core', video: 'ultWZbUMPL8' },
            { name: 'RDL', sets: '3×8–10', muscles: 'Hamstrings, glutes', video: 'XowKMitOVNc' },
            { name: 'Leg Extension', sets: '3×12', muscles: 'Quads isolation', video: 'YyvSfVjQeL0' },
            { name: 'Leg Curl', sets: '3×12', muscles: 'Hamstrings isolation', video: '1Tq3QdYUuHs' },
            { name: 'Standing Calf Raise', sets: '3×15', muscles: 'Calves', video: 'JbyjNymZOt0' },
            { name: 'Cable Crunch', sets: '3×12–15', muscles: 'Abs', video: 'Xyd_fa5zoEU' },
            { name: 'Oblique Twist', sets: '3×10/side', muscles: 'Obliques', video: 'pAplQXk3dkU' }
        ]
    },
    wednesday: {
        name: 'Rest',
        exercises: [
            { name: 'Light Stretching', sets: '15-20 min', muscles: 'Full body recovery', video: '2MN1vXO9-l8' }
        ]
    },
    thursday: {
        name: 'Push',
        exercises: [
            { name: 'Bench Press / Incline DB Press', sets: '3×8–10', muscles: 'Chest, shoulders, triceps', video: 'rT7DgCr-3pg' },
            { name: 'DB Shoulder Press', sets: '3×8–10', muscles: 'Front & side shoulders', video: 'qEwKCR5JCog' },
            { name: 'Cable Fly', sets: '3×12', muscles: 'Chest', video: 'Iwe6AmxVf7o' },
            { name: 'Lateral Raises', sets: '3×15', muscles: 'Side shoulders', video: '3VcKaXpzqRo' },
            { name: 'Tricep Pushdown', sets: '3×12', muscles: 'Triceps', video: '2-LAMcpzODU' },
            { name: 'Overhead Tricep Extension', sets: '3×12', muscles: 'Long head of triceps', video: 'YbX7Wd8jQ-Q' }
        ]
    },
    friday: {
        name: 'Pull',
        exercises: [
            { name: 'Pull-Ups', sets: '3×AMRAP', muscles: 'Lats, upper back, biceps', video: 'eGo4IYlbE5g' },
            { name: 'Lat Pulldown', sets: '3×10–12', muscles: 'Lats, upper back', video: 'JEb-dwU3VF4' },
            { name: 'Row', sets: '3×8–10', muscles: 'Middle back, lats, biceps', video: 'I-qgwlP0J90' },
            { name: 'Face Pull', sets: '3×12–15', muscles: 'Rear shoulders, traps', video: 'rep-qVOkqgk' },
            { name: 'Hammer Curl', sets: '3×12', muscles: 'Biceps, forearms', video: 'zC3nLlEvin4' },
            { name: 'Reverse Curl', sets: '3×12', muscles: 'Forearms', video: 'nRgxYX2Ve9w' },
            { name: 'Straight-Arm Pulldown', sets: '3×12–15', muscles: 'Lats (width & V-taper)', video: 'njry0JYSRyQ' }
        ]
    },
    saturday: {
        name: 'Legs + Abs',
        exercises: [
            { name: 'Squat', sets: '3×8–10', muscles: 'Quads, glutes, core', video: 'ultWZbUMPL8' },
            { name: 'RDL', sets: '3×8–10', muscles: 'Hamstrings, glutes', video: 'XowKMitOVNc' },
            { name: 'Leg Extension', sets: '3×12', muscles: 'Quads isolation', video: 'YyvSfVjQeL0' },
            { name: 'Leg Curl', sets: '3×12', muscles: 'Hamstrings isolation', video: '1Tq3QdYUuHs' },
            { name: 'Standing Calf Raise', sets: '3×15', muscles: 'Calves', video: 'JbyjNymZOt0' },
            { name: 'Cable Crunch', sets: '3×12–15', muscles: 'Abs', video: 'Xyd_fa5zoEU' },
            { name: 'Oblique Twist', sets: '3×10/side', muscles: 'Obliques', video: 'pAplQXk3dkU' }
        ]
    },
    sunday: {
        name: 'Active Recovery',
        exercises: [
            { name: '30–45 min walking', sets: '1×30-45 min', muscles: 'Cardio, recovery', video: 'FbqKY0cqNME' }
        ]
    }
};

// State Management
class AppState {
    constructor() {
        this.workouts = this.loadWorkouts();
        this.profile = this.loadProfile();
        this.prs = this.loadPRs();
        this.workoutHistory = this.loadWorkoutHistory();
        this.measurements = this.loadMeasurements();
        this.currentDay = this.getCurrentDay();
        this.theme = this.loadTheme();
    }

    loadWorkouts() {
        const saved = localStorage.getItem('workouts');
        return saved ? JSON.parse(saved) : defaultWorkouts;
    }

    saveWorkouts() {
        localStorage.setItem('workouts', JSON.stringify(this.workouts));
    }

    loadProfile() {
        const saved = localStorage.getItem('profile');
        return saved ? JSON.parse(saved) : {
            name: 'DAREL BRIONES',
            weight: 75,
            height: 180,
            age: 25,
            gender: 'male',
            activityLevel: 1.55,
            goal: 0,
            calories: 2500,
            protein: 150,
            tdee: 0
        };
    }

    saveProfile() {
        localStorage.setItem('profile', JSON.stringify(this.profile));
    }

    loadPRs() {
        const saved = localStorage.getItem('prs');
        return saved ? JSON.parse(saved) : {};
    }

    savePRs() {
        localStorage.setItem('prs', JSON.stringify(this.prs));
    }

    loadWorkoutHistory() {
        const saved = localStorage.getItem('workoutHistory');
        return saved ? JSON.parse(saved) : [];
    }

    saveWorkoutHistory() {
        localStorage.setItem('workoutHistory', JSON.stringify(this.workoutHistory));
    }

    loadMeasurements() {
        const saved = localStorage.getItem('measurements');
        return saved ? JSON.parse(saved) : [];
    }

    saveMeasurements() {
        localStorage.setItem('measurements', JSON.stringify(this.measurements));
    }

    logWorkout(day, duration = 45) {
        const workout = {
            date: new Date().toISOString(),
            day: day,
            duration: duration,
            exercises: this.workouts[day].exercises.length
        };
        this.workoutHistory.push(workout);
        this.saveWorkoutHistory();
    }

    getStreak() {
        if (this.workoutHistory.length === 0) return 0;
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let streak = 0;
        let currentDate = new Date(today);
        
        for (let i = this.workoutHistory.length - 1; i >= 0; i--) {
            const workoutDate = new Date(this.workoutHistory[i].date);
            workoutDate.setHours(0, 0, 0, 0);
            
            if (workoutDate.getTime() === currentDate.getTime()) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else if (workoutDate.getTime() < currentDate.getTime()) {
                break;
            }
        }
        
        return streak;
    }

    getWeekStats() {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const weekWorkouts = this.workoutHistory.filter(w => 
            new Date(w.date) >= oneWeekAgo
        );
        
        return {
            workouts: weekWorkouts.length,
            time: weekWorkouts.reduce((sum, w) => sum + (w.duration || 45), 0),
            exercises: weekWorkouts.reduce((sum, w) => sum + (w.exercises || 0), 0)
        };
    }

    addMeasurement(data) {
        this.measurements.push({
            ...data,
            date: data.date || new Date().toISOString()
        });
        this.measurements.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.saveMeasurements();
    }

    loadTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    getCurrentDay() {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[new Date().getDay()];
    }

    addPR(exerciseName, weight, reps, date = new Date().toISOString()) {
        if (!this.prs[exerciseName]) {
            this.prs[exerciseName] = [];
        }
        this.prs[exerciseName].push({ weight, reps, date });
        this.savePRs();
    }

    getPRs(exerciseName) {
        return this.prs[exerciseName] || [];
    }

    getTopPRs(limit = 5) {
        const allPRs = [];
        for (const [exercise, records] of Object.entries(this.prs)) {
            if (records.length > 0) {
                const best = records.reduce((max, curr) => 
                    curr.weight > max.weight ? curr : max
                );
                allPRs.push({ exercise, ...best });
            }
        }
        return allPRs.sort((a, b) => b.weight - a.weight).slice(0, limit);
    }

    exportData() {
        return JSON.stringify({
            workouts: this.workouts,
            profile: this.profile,
            prs: this.prs,
            workoutHistory: this.workoutHistory,
            measurements: this.measurements,
            exportDate: new Date().toISOString(),
            version: '2.0'
        }, null, 2);
    }

    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.workouts) this.workouts = data.workouts;
            if (data.profile) this.profile = data.profile;
            if (data.prs) this.prs = data.prs;
            if (data.workoutHistory) this.workoutHistory = data.workoutHistory;
            if (data.measurements) this.measurements = data.measurements;
            this.saveWorkouts();
            this.saveProfile();
            this.savePRs();
            this.saveWorkoutHistory();
            this.saveMeasurements();
            return true;
        } catch (e) {
            return false;
        }
    }

    resetData() {
        this.workouts = defaultWorkouts;
        this.prs = {};
        this.workoutHistory = [];
        this.measurements = [];
        this.saveWorkouts();
        this.savePRs();
        this.saveWorkoutHistory();
        this.saveMeasurements();
    }
}

// Initialize App
const state = new AppState();
let currentView = 'home';
let currentDay = state.currentDay;

// Theme Management
function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    state.saveTheme();
    applyTheme();
}

// Navigation
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`${viewName}-view`).classList.add('active');
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    
    currentView = viewName;
    
    if (viewName === 'workouts') renderWorkouts();
    if (viewName === 'progress') renderProgress();
    if (viewName === 'settings') renderSettings();
}

// Home View
function renderHome() {
    // Update profile name
    document.getElementById('user-name').textContent = state.profile.name;
    
    // Render today's workout
    const todayWorkout = state.workouts[currentDay];
    const container = document.getElementById('today-workout');
    
    if (todayWorkout) {
        container.innerHTML = `
            <div class="workout-day">${currentDay.toUpperCase()}</div>
            <h3 class="workout-title">${todayWorkout.name.toUpperCase()}</h3>
            <div class="workout-duration">${todayWorkout.exercises.length} exercises</div>
        `;
    }
}

// Workouts View
function renderWorkouts() {
    const workout = state.workouts[currentDay];
    const container = document.getElementById('exercises-container');
    
    if (!workout) {
        container.innerHTML = '<div class="empty-state"><p>No workout data</p></div>';
        return;
    }
    
    if (currentDay === 'wednesday' || currentDay === 'sunday') {
        container.innerHTML = `
            <div class="rest-day glass">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <h3>${workout.name}</h3>
                <p>${workout.exercises[0].name}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = workout.exercises.map((ex, idx) => {
        const prs = state.getPRs(ex.name);
        const bestPR = prs.length > 0 ? prs.reduce((max, curr) => 
            curr.weight > max.weight ? curr : max
        ) : null;
        
        const thumbnailUrl = ex.video ? `https://img.youtube.com/vi/${ex.video}/mqdefault.jpg` : '';
        
        return `
            <div class="exercise-card" data-exercise="${idx}">
                ${thumbnailUrl ? `
                    <div class="exercise-thumbnail" style="width: 100%; height: 120px; border-radius: 12px; overflow: hidden; margin-bottom: 12px;">
                        <img src="${thumbnailUrl}" alt="${ex.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                ` : ''}
                <div class="exercise-header">
                    <div>
                        <div class="exercise-name">${ex.name}</div>
                        <div class="exercise-sets">${ex.sets}</div>
                    </div>
                    <div class="exercise-actions">
                        <button onclick="editExercise('${currentDay}', ${idx})" aria-label="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button onclick="deleteExercise('${currentDay}', ${idx})" aria-label="Delete">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="exercise-muscles">${ex.muscles}</div>
                ${bestPR ? `<div class="exercise-pr">PR: ${bestPR.weight}kg × ${bestPR.reps}</div>` : ''}
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.exercise-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                const idx = card.dataset.exercise;
                showExerciseModal(currentDay, parseInt(idx));
            }
        });
    });
}

// Exercise Modal
function showExerciseModal(day, exerciseIdx) {
    const exercise = state.workouts[day].exercises[exerciseIdx];
    const modal = document.getElementById('exercise-modal');
    const modalBody = document.getElementById('modal-body');
    
    const prs = state.getPRs(exercise.name);
    
    modalBody.innerHTML = `
        <div class="exercise-name" style="font-size: 20px; margin-bottom: 10px;">${exercise.name}</div>
        <div class="exercise-sets" style="margin-bottom: 10px;">${exercise.sets}</div>
        <div class="exercise-muscles" style="margin-bottom: 20px;">${exercise.muscles}</div>
        
        ${exercise.video ? `
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${exercise.video}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        ` : ''}
        
        <div class="pr-form">
            <h4>Log Personal Record</h4>
            <div class="pr-input-group">
                <input type="number" id="pr-weight" class="input-field" placeholder="Weight (kg)" step="0.5">
                <input type="number" id="pr-reps" class="input-field" placeholder="Reps" step="1">
            </div>
            <button class="primary-btn" onclick="savePR('${exercise.name}')">SAVE PR</button>
        </div>
        
        ${prs.length > 0 ? `
            <div class="pr-history">
                <h4>PR History</h4>
                ${prs.slice(-5).reverse().map(pr => `
                    <div class="pr-history-item">
                        ${pr.weight}kg × ${pr.reps} reps - ${new Date(pr.date).toLocaleDateString()}
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('exercise-modal').classList.remove('active');
}

function savePR(exerciseName) {
    const weight = parseFloat(document.getElementById('pr-weight').value);
    const reps = parseInt(document.getElementById('pr-reps').value);
    
    if (weight && reps) {
        state.addPR(exerciseName, weight, reps);
        closeModal();
        renderWorkouts();
        showNotification('PR saved successfully!');
    }
}

// Progress View
function renderProgress() {
    // Streak
    const streak = state.getStreak();
    document.getElementById('streak-number').textContent = streak;
    document.getElementById('total-workouts').textContent = state.workoutHistory.length;
    
    // Week stats
    const weekStats = state.getWeekStats();
    document.getElementById('week-workouts').textContent = weekStats.workouts;
    document.getElementById('week-time').textContent = weekStats.time;
    document.getElementById('week-exercises').textContent = weekStats.exercises;
    
    // Measurements
    renderMeasurements();
    
    // PRs
    const prList = document.getElementById('pr-list');
    const topPRs = state.getTopPRs();
    
    if (topPRs.length === 0) {
        prList.innerHTML = '<p style="color: var(--text-secondary);">No personal records yet. Start logging your workouts!</p>';
    } else {
        prList.innerHTML = topPRs.map(pr => `
            <div class="pr-item">
                <span class="pr-name">${pr.exercise}</span>
                <span class="pr-value">${pr.weight}kg × ${pr.reps}</span>
            </div>
        `).join('');
    }
    
    renderProgressChart();
}

function renderMeasurements() {
    const container = document.getElementById('measurements-list');
    
    if (state.measurements.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); font-size: 13px;">No measurements yet. Track your progress!</p>';
        return;
    }
    
    container.innerHTML = state.measurements.slice(0, 5).map((m, idx) => {
        const prevMeasurement = state.measurements[idx + 1];
        let change = '';
        
        if (prevMeasurement && m.weight && prevMeasurement.weight) {
            const diff = m.weight - prevMeasurement.weight;
            if (diff !== 0) {
                change = `<span class="measurement-change ${diff > 0 ? 'positive' : 'negative'}">
                    ${diff > 0 ? '+' : ''}${diff.toFixed(1)}kg
                </span>`;
            }
        }
        
        return `
            <div class="measurement-item">
                <div>
                    <div class="measurement-value">${m.weight}kg</div>
                    <div class="measurement-date">${new Date(m.date).toLocaleDateString()}</div>
                </div>
                ${change}
            </div>
        `;
    }).join('');
}

function renderProgressChart() {
    const canvas = document.getElementById('progress-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;
    
    // Sample data - workout frequency per day
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const data = [8, 6, 2, 7, 8, 6, 3]; // Sample workout counts
    
    const barWidth = canvas.width / days.length;
    const maxValue = Math.max(...data);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw bars
    data.forEach((value, idx) => {
        const barHeight = (value / maxValue) * (canvas.height - 40);
        const x = idx * barWidth + barWidth * 0.2;
        const y = canvas.height - barHeight - 20;
        
        // Bar - use red for highest, orange for others
        ctx.fillStyle = idx === 1 ? '#e60000' : '#ff5a00';
        ctx.fillRect(x, y, barWidth * 0.6, barHeight);
        
        // Label
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(days[idx], x + barWidth * 0.3, canvas.height - 5);
    });
}

// Settings View
function renderSettings() {
    document.getElementById('user-name-input').value = state.profile.name;
    document.getElementById('weight-input').value = state.profile.weight;
    document.getElementById('height-input').value = state.profile.height;
    document.getElementById('age-input').value = state.profile.age || 25;
    document.getElementById('gender-input').value = state.profile.gender || 'male';
    document.getElementById('activity-input').value = state.profile.activityLevel || 1.55;
    document.getElementById('goal-input').value = state.profile.goal || 0;
    
    // Show nutrition results if already calculated
    if (state.profile.tdee) {
        displayNutritionResults();
    }
}

function calculateNutrition() {
    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value);
    const age = parseInt(document.getElementById('age-input').value);
    const gender = document.getElementById('gender-input').value;
    const activityLevel = parseFloat(document.getElementById('activity-input').value);
    const goal = parseInt(document.getElementById('goal-input').value);
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = Math.round(bmr * activityLevel);
    
    // Calculate target calories based on goal
    const targetCalories = tdee + goal;
    
    // Calculate protein (2.2g per kg for muscle building/maintenance)
    const protein = Math.round(weight * 2.2);
    
    // Update profile
    state.profile.age = age;
    state.profile.gender = gender;
    state.profile.activityLevel = activityLevel;
    state.profile.goal = goal;
    state.profile.tdee = tdee;
    state.profile.calories = targetCalories;
    state.profile.protein = protein;
    
    displayNutritionResults();
}

function displayNutritionResults() {
    const resultsDiv = document.getElementById('nutrition-results');
    resultsDiv.style.display = 'block';
    
    document.getElementById('tdee-value').textContent = state.profile.tdee + ' kcal';
    document.getElementById('target-calories').textContent = state.profile.calories + ' kcal';
    document.getElementById('protein-value').textContent = state.profile.protein + 'g';
    
    const deficit = state.profile.calories - state.profile.tdee;
    const deficitText = deficit === 0 ? 'Maintenance' : 
                       deficit > 0 ? `+${deficit} kcal (Surplus)` : 
                       `${deficit} kcal (Deficit)`;
    document.getElementById('deficit-value').textContent = deficitText;
    document.getElementById('deficit-value').style.color = 
        deficit === 0 ? 'var(--text-primary)' : 
        deficit > 0 ? 'var(--accent-secondary)' : 
        'var(--accent)';
}

function saveProfile() {
    state.profile.name = document.getElementById('user-name-input').value;
    state.profile.weight = parseFloat(document.getElementById('weight-input').value);
    state.profile.height = parseFloat(document.getElementById('height-input').value);
    state.saveProfile();
    renderHome();
    showNotification('Profile saved successfully!');
}

// Exercise Management
function editExercise(day, idx) {
    const exercise = state.workouts[day].exercises[idx];
    const newName = prompt('Exercise name:', exercise.name);
    if (newName) {
        exercise.name = newName;
        const newSets = prompt('Sets/Reps:', exercise.sets);
        if (newSets) exercise.sets = newSets;
        const newMuscles = prompt('Target muscles:', exercise.muscles);
        if (newMuscles) exercise.muscles = newMuscles;
        state.saveWorkouts();
        renderWorkouts();
    }
}

function deleteExercise(day, idx) {
    if (confirm('Delete this exercise?')) {
        state.workouts[day].exercises.splice(idx, 1);
        state.saveWorkouts();
        renderWorkouts();
    }
}

function addExercise() {
    const name = prompt('Exercise name:');
    if (name) {
        const sets = prompt('Sets/Reps:', '3×10');
        const muscles = prompt('Target muscles:');
        const video = prompt('YouTube video ID (optional):');
        
        state.workouts[currentDay].exercises.push({
            name,
            sets: sets || '3×10',
            muscles: muscles || '',
            video: video || ''
        });
        state.saveWorkouts();
        renderWorkouts();
    }
}

// Search
function searchExercises(query) {
    const allExercises = [];
    for (const [day, workout] of Object.entries(state.workouts)) {
        workout.exercises.forEach((ex, idx) => {
            if (ex.name.toLowerCase().includes(query.toLowerCase())) {
                allExercises.push({ day, exercise: ex, idx });
            }
        });
    }
    return allExercises;
}

// Data Management
function exportData() {
    const data = state.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workout-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showNotification('Data exported successfully!');
}

function importData() {
    document.getElementById('import-file-input').click();
}

function resetData() {
    if (confirm('This will reset all data to defaults. Continue?')) {
        state.resetData();
        renderWorkouts();
        renderProgress();
        showNotification('Data reset successfully!');
    }
}

// Notifications
function showNotification(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Workout Splits App', { body: message });
    }
    
    // Fallback: console log
    console.log(message);
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Timer Functionality
let timerInterval = null;
let timerSeconds = 0;
let timerTotalSeconds = 0;

function openTimer() {
    document.getElementById('timer-modal').classList.add('active');
    resetTimer();
}

function closeTimer() {
    document.getElementById('timer-modal').classList.remove('active');
    stopTimer();
}

function startTimer() {
    if (timerInterval) {
        stopTimer();
        document.getElementById('timer-start-btn').textContent = 'START';
        return;
    }
    
    if (timerSeconds === 0) {
        timerSeconds = 60; // Default 1 minute
        timerTotalSeconds = timerSeconds;
    }
    
    document.getElementById('timer-start-btn').textContent = 'PAUSE';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            stopTimer();
            playTimerSound();
            showNotification('Rest time is over! Ready for your next set?');
            document.getElementById('timer-start-btn').textContent = 'START';
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    timerTotalSeconds = 0;
    updateTimerDisplay();
    document.getElementById('timer-start-btn').textContent = 'START';
}

function setTimerPreset(seconds) {
    stopTimer();
    timerSeconds = seconds;
    timerTotalSeconds = seconds;
    updateTimerDisplay();
    document.getElementById('timer-start-btn').textContent = 'START';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer-time').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const progress = timerTotalSeconds > 0 ? 
        ((timerTotalSeconds - timerSeconds) / timerTotalSeconds) * 100 : 0;
    document.getElementById('timer-progress-bar').style.width = progress + '%';
}

function playTimerSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Measurement Functions
function openMeasurementModal() {
    document.getElementById('measurement-modal').classList.add('active');
    document.getElementById('measurement-date').valueAsDate = new Date();
    document.getElementById('measurement-weight').value = state.profile.weight || '';
}

function closeMeasurementModal() {
    document.getElementById('measurement-modal').classList.remove('active');
}

function saveMeasurement() {
    const data = {
        date: document.getElementById('measurement-date').value,
        weight: parseFloat(document.getElementById('measurement-weight').value),
        bodyFat: parseFloat(document.getElementById('measurement-bodyfat').value) || null,
        chest: parseFloat(document.getElementById('measurement-chest').value) || null,
        waist: parseFloat(document.getElementById('measurement-waist').value) || null,
        arms: parseFloat(document.getElementById('measurement-arms').value) || null
    };
    
    if (data.weight) {
        state.addMeasurement(data);
        closeMeasurementModal();
        renderProgress();
        showNotification('Measurement saved!');
        
        // Clear form
        document.getElementById('measurement-bodyfat').value = '';
        document.getElementById('measurement-chest').value = '';
        document.getElementById('measurement-waist').value = '';
        document.getElementById('measurement-arms').value = '';
    }
}

// Mark workout as complete
function markWorkoutComplete(day) {
    state.logWorkout(day);
    showNotification(`${day.charAt(0).toUpperCase() + day.slice(1)} workout logged!`);
    renderProgress();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Apply theme
    applyTheme();
    
    // Render initial view
    renderHome();
    
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.view);
        });
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Day tabs
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentDay = tab.dataset.day;
            renderWorkouts();
        });
    });
    
    // Modal
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('exercise-modal').addEventListener('click', (e) => {
        if (e.target.id === 'exercise-modal') closeModal();
    });
    
    // Timer
    document.getElementById('timer-btn').addEventListener('click', openTimer);
    document.getElementById('close-timer-btn').addEventListener('click', closeTimer);
    document.getElementById('timer-start-btn').addEventListener('click', startTimer);
    document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);
    document.getElementById('timer-modal').addEventListener('click', (e) => {
        if (e.target.id === 'timer-modal') closeTimer();
    });
    
    // Timer presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimerPreset(parseInt(btn.dataset.seconds));
        });
    });
    
    // Measurements
    document.getElementById('add-measurement-btn').addEventListener('click', openMeasurementModal);
    document.getElementById('close-measurement-btn').addEventListener('click', closeMeasurementModal);
    document.getElementById('save-measurement-btn').addEventListener('click', saveMeasurement);
    document.getElementById('measurement-modal').addEventListener('click', (e) => {
        if (e.target.id === 'measurement-modal') closeMeasurementModal();
    });
    
    // Buttons
    document.getElementById('start-workout-btn').addEventListener('click', () => switchView('workouts'));
    document.getElementById('view-all-btn').addEventListener('click', () => switchView('workouts'));
    document.getElementById('add-exercise-btn').addEventListener('click', addExercise);
    document.getElementById('complete-workout-btn').addEventListener('click', () => markWorkoutComplete(currentDay));
    document.getElementById('calculate-btn').addEventListener('click', calculateNutrition);
    document.getElementById('save-profile-btn').addEventListener('click', saveProfile);
    document.getElementById('export-data-btn').addEventListener('click', exportData);
    document.getElementById('import-data-btn').addEventListener('click', importData);
    document.getElementById('reset-data-btn').addEventListener('click', resetData);
    
    // File import
    document.getElementById('import-file-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (state.importData(event.target.result)) {
                    showNotification('Data imported successfully!');
                    renderWorkouts();
                    renderProgress();
                } else {
                    alert('Failed to import data. Invalid file format.');
                }
            };
            reader.readAsText(file);
        }
    });
    
    // Search
    document.getElementById('exercise-search').addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 2) {
            const results = searchExercises(query);
            console.log('Search results:', results);
            // Could implement search results display
        }
    });
    
    // Notifications toggle
    document.getElementById('notifications-toggle').addEventListener('change', (e) => {
        if (e.target.checked) {
            requestNotificationPermission();
        }
    });
    
    // Request notification permission on load
    setTimeout(requestNotificationPermission, 2000);
});

// Make functions global for inline handlers
window.editExercise = editExercise;
window.deleteExercise = deleteExercise;
window.savePR = savePR;
