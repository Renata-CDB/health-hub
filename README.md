# 📌 HealthHub

A **serverless healthcare management application** designed to streamline the interaction between patients and doctors. Built on **AWS Cloud Services** and leveraging **serverless architecture**, it provides secure authentication, registration, and appointment scheduling.

---

## 🚀 Project Overview  

HealthHub is a **cloud-native, full-stack application** developed to demonstrate skills in **cloud computing, DevOps, and modern application design**.  

🔹 **Backend** powered by **AWS Lambda**, **API Gateway**, and **DynamoDB**.  
🔹 **Frontend** developed with **React.js**.  
🔹 **Authentication & Authorization** with **Cognito**.  
🔹 **Infrastructure as Code** with **CloudFormation**.  
🔹 **Deployed and tested on an EC2 instance**.  

---

## 🏗️ Architecture  

```plaintext
 ┌────────────┐       ┌────────────┐
 │   React    │ --->  │ API Gateway│ --->  │ Lambda │ ---> │ DynamoDB │
 │  Frontend  │       └────────────┘       └────────┘     └──────────┘
      │
      ▼
   Cognito
 (Authentication)
```

---

## ⚙️ Features  

- 🔑 **User Authentication**: Secure login and signup with AWS Cognito.  
- 👨‍⚕️ **Doctor Registration**: Doctors can register and manage availability.  
- 🧑‍🤝‍🧑 **Patient Registration**: Patients can create accounts and manage profiles.  
- 📅 **Appointment Scheduling**: Patients can book appointments with doctors.  
- ☁️ **Scalable Cloud Infrastructure**: Fully serverless and designed to scale.  

---

## 📂 Project Structure  

```
health-hub/
├── backend/             # AWS Lambda services (appointments, doctors, patients, users)
│   ├── appointment-service/
│   ├── doctor-service/
│   ├── patient-service/
│   └── user-service/
│
├── frontend/            # React.js web application
│   ├── src/components/  # UI Components
│   ├── src/services/    # API integration
│   └── public/          # Static assets
│
└── README.md
```

---

## 🛠️ Technologies Used  

- **AWS Lambda**  
- **API Gateway**  
- **Amazon DynamoDB**  
- **Amazon Cognito**  
- **CloudFormation**  
- **React.js**  
- **EC2 (for deployment and testing)**  
- **Node.js / TypeScript**  

---

## 🚀 How to Run Locally  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Renata-CDB/health-hub.git
   cd health-hub
   ```

2. **Backend setup (serverless services)**  
   - Deploy via AWS CLI or CloudFormation templates.  

3. **Frontend setup**  
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## 📸 Screenshots  

👉 <img width="1864" height="989" alt="Captura de tela de 2025-09-20 01-39-00" src="https://github.com/user-attachments/assets/fc5b20b4-1a4f-4c02-8924-a7fed45dc051" />
   <img width="1864" height="983" alt="Captura de tela de 2025-09-20 01-36-06" src="https://github.com/user-attachments/assets/863b095d-df4f-449f-9529-b7ff647124ed" />
   ![deploystackcloudformation](https://github.com/user-attachments/assets/8d03bb76-b4d4-4855-811e-87d630db315a)
   ![deploy](https://github.com/user-attachments/assets/b9ff509b-2798-4a95-92ee-6c592e735972)





## 📌 About This Project  

This project was built as part of a **hands-on cloud computing and serverless training**.  
It demonstrates the ability to design, deploy, and maintain **production-grade cloud applications**.  

---

## 📄 License  

This project is currently licensed as **open-source**. Feel free to explore and use it for learning purposes.  

---

✨ **Author:** [Renata-CDB](https://github.com/Renata-CDB)  
