import Card from "react-bootstrap/Card";
import {
  FaUserAlt,
  FaEnvelopeSquare,
  FaLemon,
  FaPhoneAlt,
  FaCcJcb,
  FaInfoCircle,
  FaSearchLocation,
  FaRegCreditCard,
  FaMale,
  FaFemale,
  FaLaptop,
  FaEye,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

function ProfileCard({
  FirstName,
  LastName,
  Gender,
  Latitude,
  Longitude,
  CreditCardNumber,
  CreditCardType,
  Email,
  DomainName,
  PhoneNumber,
  MacAddress,
  URL,
  UserName,
  LastLogin,
  PaymentMethod,
}) {
  return (
    <Card style={{ minHeight: "20rem", padding: "1rem", position: "relative" }}>
      <div className="highlighter">
        {Gender == "Male" ? <FaMale /> : <FaFemale />}
      </div>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaUserAlt />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Full Name:</p>
            {`${FirstName}  ${LastName}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaUserAlt />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Username:</p>@{`${UserName}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaEnvelopeSquare />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Email:</p>
            {`${Email}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaLemon />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Domain Name:</p>
            {`${DomainName}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaPhoneAlt />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Phone Number:</p>
            {`${PhoneNumber}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaRegCreditCard />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Credit Card Number:</p>
            {`${CreditCardNumber}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaCcJcb />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Credit Card Type:</p>
            {`${CreditCardType}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaInfoCircle />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">URL:</p>
            {`${URL}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaLaptop />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Mac Address:</p>
            {`${MacAddress}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaEye />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Last Login:</p>
            {`${LastLogin}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaRegMoneyBillAlt />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Payment Method:</p>
            {`${PaymentMethod}`}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card__side text-center mr-3">
            <FaSearchLocation />
          </div>
          <div className="card__main">
            <p className="text-muted text-small">Lat/Long:</p>
            {`${Latitude}`} / {`${Longitude}`}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
