# Blockhouse Coding Test

A brief description of what your project does and its purpose.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Libraries and Tools](#libraries-and-tools)
- [Approach and Thought Process](#approach-and-thought-process)
- [Backend API](#backend-api)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Python 3.x](https://www.python.org/downloads/)
- [Node.js and npm](https://nodejs.org/en/download/)
- [Django](https://www.djangoproject.com/)
- [Git](https://git-scm.com/)

### Setting Up the Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/Kronk12/blockhouse-coding-assessment.git
    cd blockhouse-coding-assessment/mysite
    ```

2. Set up a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run migrations:
    ```bash
    python manage.py migrate
    ```

5. Run the backend server:
    ```bash
    python manage.py runserver
    ```

### Setting Up the Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Running the Application

1. Ensure that both the backend and frontend servers are running.
2. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Libraries and Tools

### Backend

- **Django**: Used for building the backend API.
- **Django REST Framework**: For building RESTful APIs.
- **SQLite**: Default database used for development.

### Frontend

- **React**: For building the user interface.
- **Lightweight Charts by TradingView**: For rendering Candlestick chart.
- **Chart.js**: For creating Bar, Line, and Pie charts.
- **CSS Grid and Flexbox**: For responsive layout design.
- **Tailwind CSS**: Unused.

## Approach and Thought Process

### Backend

The backend is built using Django as specified by coding assignment. API endpoints are designed to be RESTful, ensuring they are intuitive and follow best practices.

- **`urls.py`**: Defines the API routes.
- **`views.py`**: Contains the logic for handling requests and returning responses.
- **`tests.py`**: Includes test cases to ensure the functionality of the API.

### Frontend

The frontend is developed using React and Next.js as specified by assignment. The charts are created using a combination of Lightweight Charts by TradingView and Chart.js.

- **Responsive Design**: CSS Grid and Flexbox are used to ensure the application is responsive, adapting to various screen sizes.
- **Font Customization**: The global font is set to "IBM Plex Mono" for a sleek and modern appearance across the application.

## Backend API

The backend provides the following API endpoints:

- **`/api/candlestick-data/`**: Returns data for the Candlestick chart.
- **`/api/bar-chart-data/`**: Returns data for the Bar chart.
- **`/api/line-chart-data/`**: Returns data for the Line chart.
- **`/api/pie-chart-data/`**: Returns data for the Pie chart.

### Testing the API

To run the tests included in `tests.py`, use the following command:

```bash
python manage.py test
