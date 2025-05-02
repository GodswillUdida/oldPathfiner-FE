// components/Certificate.tsx
import React from "react";

interface CertificateProps {
  courseTitle: string;
  userName: string;
}

const Certificate: React.FC<CertificateProps> = ({ courseTitle, userName }) => {
  return (
    <div className="certificate">
      <h2>Certificate of Completion</h2>
      <p>
        This certifies that <strong>{userName}</strong> has successfully
        completed the course <strong>{courseTitle}</strong>.
      </p>
      <button onClick={() => window.print()}>Download Certificate</button>
    </div>
  );
};

export default Certificate;
