export const API_BASE = 'https://lyxhnfqadkwtmitlupzp.supabase.co/rest/v1';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw';
const AUTHORIZATION = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGhuZnFhZGt3dG1pdGx1cHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODE2MjYsImV4cCI6MTk5NjQ1NzYyNn0.Q-0g9JV9VaJ59cqycpFUfqoHU9G3IMGA_6aXQNH1nEw';
// we can we use .env here 
export const headers = {
  'apikey': API_KEY,
  'Authorization': `Bearer ${AUTHORIZATION}`,
  'Content-Type': 'application/json',
};