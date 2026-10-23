# CloudPrep AZ-900

**CloudPrep AZ-900** is an interactive learning and exam preparation platform designed to help learners prepare for the Microsoft Azure Fundamentals (AZ-900) certification.

The platform combines syllabus-aligned practice questions, instant feedback, explanations, progress tracking, and personalized revision to support effective learning.

Built for the **1MillionDevs Vibe Coding Hackathon** using AI-assisted development workflows.

### Live Application

**[Launch CloudPrep AZ-900](https://cloud-prep-az900.vercel.app/)**

### Features

- **500 reviewed practice questions** organized around the AZ-900 syllabus and its learning objectives.
- **Topic-based practice:** Select specific Azure domains and topics.
- **Flexible quiz configuration:** Choose difficulty levels and question counts.
- **Practice mode:** Receive immediate feedback and explanations after answering.
- **Assessment mode:** Complete questions before viewing your results.
- **Progress tracking:** View completed quizzes, scores, and performance on the dashboard.
- **Mistakes review:** Revisit incorrectly answered questions and identify areas requiring further study.
- **Quiz resumption:** Continue unfinished quizzes after refreshing or reopening the application.
- **Guest access:** Practise without creating an account.
- **User accounts:** Register, sign in, update your display name, and maintain account-specific progress.
- **Cloud synchronization:** Save completed quiz results to Supabase for authenticated users.
- **Responsive interface:** Designed for desktop and mobile browsers.

### Technology Stack

| Technology | Purpose |
| --- | --- |
| React 19 + TypeScript | Application interface and type-safe development |
| TanStack Start / Router | Application routing and server framework |
| Vite | Development and production builds |
| Tailwind CSS 4 | Responsive interface styling |
| Supabase | Authentication and cloud quiz-result storage |
| Vitest | Automated testing |
| GitHub | Source control and collaboration |
| Vercel | Production deployment |
| Lovable | AI-assisted application development |

### Getting Started

**Requirements:** Node.js 20.19+ or 22.12+ and npm.

1. Clone the repository:

   ```bash
   git clone https://github.com/uservkai/cloud-prep-az900.git
   cd cloud-prep-az900
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your Supabase environment variables in a `.env` file:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL shown in your terminal.

### Testing and Build

```bash
npx tsc --noEmit
npm run test
npm run build
```

### How CloudPrep Works

1. Select an Azure domain or topic.
2. Configure your quiz difficulty, number of questions, and practice mode.
3. Answer questions and receive feedback based on your selected mode.
4. View your results and identify topics requiring improvement.
5. Review mistakes and continue practising.
6. Optionally create an account to synchronize completed results and maintain personalized progress.

### Data and Privacy

Guest quiz results and unfinished sessions are stored locally in the browser. Signed-in learners have account-specific quiz sessions, with completed results saved locally and synchronized through Supabase.

CloudPrep is an independent educational project. It is **not affiliated with or endorsed by Microsoft**. Practice questions are original and are not reproduced from official Microsoft certification examinations or practice assessments.

### Project Links

- **Live Application:** <https://cloud-prep-az900.vercel.app/>
- **GitHub Repository:** <https://github.com/uservkai/cloud-prep-az900>
- **Official AZ-900 Study Guide:** <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900>

---

Developed for the **1MillionDevs Vibe Coding Hackathon**.
