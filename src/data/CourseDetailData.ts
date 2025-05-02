interface CourseDetailData {
  id: string;
  title: string;
  subCourses: { title: string; price: string; description: string }[];
}

export default CourseDetailData;