import { Card } from "antd";
import "../Styles/CandidateCard.css";

const CandidateCard = ({name}) => (
    <Card
    className="candidate-card"
      title="Card title"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Candidate Name: {name}</p>
    </Card>
  );
  export default CandidateCard;