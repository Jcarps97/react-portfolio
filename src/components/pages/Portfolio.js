import React from 'react';
import pet from '../../images/pet.png'
import code from '../../images/codequiz.png'
import planner from '../../images/dayplanner.png'
import employee from '../../images/employee.png'
import recipe from '../../images/recipe.png'
import weather from '../../images/weather.png'

export default function Portfolio() {
  return (
    <div id="body">
      <h1>Portfolio</h1>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={pet} className="card-img-top" alt="pet tracker app" />
            <div className="card-body">
              <h5 className="card-title">Pet Tracker App</h5>
              <p className="card-text">This was our second project, I worked with 3 others to create an app to track pet medical data!</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/erikaosterbur/pet-tracker-app" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://group-1-pet-tracker.herokuapp.com/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={recipe} className="card-img-top" alt="meal planner app" />
            <div className="card-body">
              <h5 className="card-title">Meal Planner</h5>
              <p className="card-text">This was our first project, I worked with 3 others to create an app that generated random recipes for a calendar!</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/kembo001/mealPlan" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://kembo001.github.io/mealPlan/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={employee} className="card-img-top" alt="employee manager app" />
            <div className="card-body">
              <h5 className="card-title">Employee Manager</h5>
              <p className="card-text">I created an app to create and manage employee data!</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/Jcarps97/employeeManagement" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://jcarps97.github.io/employeeManagement/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={planner} className="card-img-top" alt="day planner app" />
            <div className="card-body">
              <h5 className="card-title">Day Planner</h5>
              <p className="card-text">I created an app to maintain schedules of day to day events!</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/Jcarps97/calendar-assignment" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://jcarps97.github.io/calendar-assignment/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={weather} className="card-img-top" alt="Weather Tracker" />
            <div className="card-body">
              <h5 className="card-title">Weather Tracker App</h5>
              <p className="card-text">I created an app to give weather forcasts for any city!</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/Jcarps97/weather-dashboard" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://jcarps97.github.io/weather-dashboard/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
      <div className="card m-2" style={{width: "18rem"}}>
            <img src={code} className="card-img-top" alt="code quiz" />
            <div className="card-body">
              <h5 className="card-title">Code Quiz App</h5>
              <p className="card-text">I created a simple timed quiz that would record scores at the end and have a leaderboard</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/Jcarps97/quiz-assignment" target="_blank" class="card-link">View on GitHub</a>
              <a href="https://jcarps97.github.io/quiz-assignment/" target="_blank" class="card-link">Application</a>
            </div>
      </div>
    </div>
  );
}
