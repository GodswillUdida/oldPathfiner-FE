export interface Video {
  id: string;
  title: string;
  url: string;
  duration: number;
  course: { title: string };
}

export interface User {
  id: string;
  name: string | null;
  email: string;
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN";
}

export interface Stats {
  totalUsers: number;
  totalEnrollments: number;
  completions: number;
}
