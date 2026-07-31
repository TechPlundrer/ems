   const employees = [
      {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare Sales Report",
            "taskDescription": "Prepare the monthly sales report for management.",
            "taskDate": "2026-08-01",
            "category": "Reporting"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Update Client Records",
            "taskDescription": "Update customer information in the CRM.",
            "taskDate": "2026-07-28",
            "category": "CRM"
          },
          {
            "active": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Fix Login Bug",
            "taskDescription": "Resolve the authentication issue reported by users.",
            "taskDate": "2026-07-26",
            "category": "Development"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Team Meeting",
            "taskDescription": "Attend the weekly sprint planning meeting.",
            "taskDate": "2026-08-03",
            "category": "Meetings"
          }
        ]
      },
      {
        "id": 2,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Design Landing Page",
            "taskDescription": "Create a responsive landing page UI.",
            "taskDate": "2026-08-02",
            "category": "Design"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Review Pull Request",
            "taskDescription": "Review teammate's React code.",
            "taskDate": "2026-07-29",
            "category": "Code Review"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Optimize Images",
            "taskDescription": "Compress website assets for faster loading.",
            "taskDate": "2026-08-04",
            "category": "Optimization"
          }
        ]
      },
      {
        "id": 3,
        "name": "Rahul Patil",
        "email": "rahul.patil@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Database Backup",
            "taskDescription": "Take weekly database backup.",
            "taskDate": "2026-07-30",
            "category": "Database"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "API Integration",
            "taskDescription": "Integrate payment gateway APIs.",
            "taskDate": "2026-08-05",
            "category": "Backend"
          },
          {
            "active": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Server Deployment",
            "taskDescription": "Deploy the application to production.",
            "taskDate": "2026-07-25",
            "category": "Deployment"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Write Documentation",
            "taskDescription": "Document REST API endpoints.",
            "taskDate": "2026-08-06",
            "category": "Documentation"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Performance Testing",
            "taskDescription": "Test API response under heavy load.",
            "taskDate": "2026-08-07",
            "category": "Testing"
          }
        ]
      },
      {
        "id": 4,
        "name": "Sneha Joshi",
        "email": "sneha.joshi@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Create Blog Post",
            "taskDescription": "Write a technical blog for the company website.",
            "taskDate": "2026-08-01",
            "category": "Content"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "taskTitle": "SEO Audit",
            "taskDescription": "Analyze website SEO performance.",
            "taskDate": "2026-07-27",
            "category": "Marketing"
          },
          {
            "active": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Campaign Launch",
            "taskDescription": "Launch the email marketing campaign.",
            "taskDate": "2026-07-24",
            "category": "Marketing"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Social Media Calendar",
            "taskDescription": "Prepare posts for the upcoming week.",
            "taskDate": "2026-08-03",
            "category": "Social Media"
          }
        ]
      },
      {
        "id": 5,
        "name": "Vikram Singh",
        "email": "vikram.singh@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Customer Support",
            "taskDescription": "Resolve pending customer support tickets.",
            "taskDate": "2026-08-02",
            "category": "Support"
          },
          {
            "active": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Inventory Check",
            "taskDescription": "Verify office inventory records.",
            "taskDate": "2026-07-29",
            "category": "Operations"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Security Audit",
            "taskDescription": "Review user access permissions.",
            "taskDate": "2026-08-05",
            "category": "Security"
          },
          {
            "active": false,
            "completed": false,
            "failed": true,
            "taskTitle": "System Migration",
            "taskDescription": "Migrate legacy data to the new system.",
            "taskDate": "2026-07-23",
            "category": "Migration"
          },
          {
            "active": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare Presentation",
            "taskDescription": "Create slides for the monthly review meeting.",
            "taskDate": "2026-08-06",
            "category": "Presentation"
          }
        ]
      }
    ];
    const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }];

export const setLocalStorage = ()=> {
        localStorage.setItem('employees',JSON.stringify(employees))
    }
export const getLocalStorage = ()=> {
        
    }

export default setLocalStorage
  