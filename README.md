# Log Ingestor with Query Interface

## Introduction

This project is a Log Ingestor with a Query Interface designed to ingest log data  and provide a querying interface to analyze and retrieve relevant information. This README will guide you through running the project, understanding its system design, features implemented, and identified issues.

## Running the Project

To run the Log Ingestor with Query Interface, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.
   Frontend ::

   ```bash
   git clone https://github.com/niteshim0/LogIngestorFrontendChat360
   ```
   Backend ::
    ```bash
   git clone https://github.com/niteshim0/LogIngestorBackendChat360
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies.
   Frontend ::

   ```bash
   cd frontend
   npm install
   ```
   Backend ::
    ```bash
   cd backend
   npm install
   ```

 3. **Configure Environment Variables**: Create a .env file in the root directory of both backend and frontend and configure necessary environment variables.
     ```bash
       PORT=3000
       DATABASE_URL=your_database_url
       CORS_ORIGIN=*
     ```

  4. **Run the Application**: Start the application.
     ```bash
     npm run dev
     ```

  ## System Design

The Log Ingestor with Query Interface consists of the following components:

- **Log Ingestor**: Responsible for ingesting log data.

- **Query Interface**: Provides a web interface for users to query and analyze log data stored in the database.

- **Database**: Stores the ingested log data for querying and analysis.

- **Web Server**: Serves the Query Interface and handles user requests.

  ## Features Implemented

- **Log Ingestion**: The system can ingest log data.
  
- **Querying Interface**: Provides a web interface where users can input queries to retrieve specific log data based on various parameters such as time range, severity level, keywords, etc.
  
- **Search Functionality**: Allows users to search for log entries containing specific keywords or phrases.
  
- **Filtering**: Users can filter log entries based on severity levels, timestamps, or any other relevant metadata.
  


   




