import { useEffect, useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import useRecordApi from "./helpers/useRecordApi";
import ProfileCard from "./ProfileCard";
import PaginationControls from "./PaginationControls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profiles() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPagination] = useState(0);
  const [filters, setFilter] = useState([]);

  const [{ isLoading, isError, records }, setRecords] = useRecordApi(
    "https://api.enye.tech/v1/challenge/records"
  );
  const [profiles, setProfiles] = useState([])


  const numberOfPages = Math.ceil(records.size / 20);

  useEffect(() => {
    paginate(page);

    if(!profiles.length) {
      setProfiles(records.records.profiles)
    }

  }, [records, page]);

  useEffect(() => {
    handleSearch();
    applyFilters()
  }, [searchValue, filters]);

  const handleSearch = () => {
    const newRecords = records.records.profiles.filter(
      (profile) =>
        profile.FirstName.includes(searchValue) ||
        profile.LastName.includes(searchValue) ||
        `${profile.FirstName} ${profile.LastName}`.includes(searchValue)
    );

    setProfiles(newRecords);
  };

  const applyFilters = () => {
    let newRecords = [...profiles];
    filters.forEach((filter) => {
      if (filter.checked) {
        if (filter.name === "male") {
          newRecords = profiles.filter(
            (profile) => profile.Gender === "Male"
          );
        }

        if (filter.name === "female") {
          newRecords = profiles.filter(
            (profile) => profile.Gender === "Female"
          );
        }

        if (filter.name === "cc") {
          newRecords = profiles.filter(
            (profile) => profile.PaymentMethod === "cc"
          );
        }

        if (filter.name === "check") {
          newRecords = profiles.filter(
            (profile) => profile.PaymentMethod === "check"
          );
        }

        if (filter.name === "paypal") {
          newRecords = profiles.filter(
            (profile) => profile.PaymentMethod === "paypal"
          );
        }
      } else {
        newRecords = [...records.records.profiles]
      }
    });

    setProfiles(newRecords);
  };

  const handleFilter = ({ name, checked }) => {
    let newFilters = [];
    if (filters.find((item) => item.name === name)) {
      newFilters = [
        ...filters.filter((i) => i.name !== name),
        { name, checked },
      ];
    } else {
      newFilters = [...filters, { name, checked }];
    }
    setFilter(newFilters);
  };

  const paginate = (page) => {
    const paginatedProfiles = records.records.profiles.slice(
      page * 20,
      page * 20 + 20
    );
    setProfiles(paginatedProfiles);
  };

  const nextPage = (value) => {
    if (value < numberOfPages) {
      setPagination(value);
    }
  };

  const previousPage = (value) => {
    if (value >= 0) {
      setPagination(value);
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center p-5">
        <Col>
          <label htmlFor="searchBox" className="mr-4 search-box__label">
            Search by name
          </label>
          <input
            type="text"
            value={searchValue}
            name="searchBox"
            id="searchBox"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Col>
        <Col>
          <div className="text-center mb-2">FILTER BY:</div>

          <Row className="d-flex justify-content-between">
            <span className="mr-2 text-bold">Gender: </span>
            <InputGroup.Checkbox
              value="male"
              onChange={(e) =>
                handleFilter({
                  name: e.currentTarget.value,
                  checked: e.currentTarget.checked,
                })
              }
            />{" "}
            <span className="mr-4">Male: </span>
            <br />
            <InputGroup.Checkbox
              value="female"
              onChange={(e) =>
                handleFilter({
                  name: e.currentTarget.value,
                  checked: e.currentTarget.checked,
                })
              }
            />{" "}
            <span className="mr-4">Female </span>
            <br />
          </Row>
          <Row className="d-flex justify-content-between mt-2">
            <span className="mr-2 text-bold">Payment Method: </span>
            <InputGroup.Checkbox
              value="cc"
              onChange={(e) =>
                handleFilter({
                  name: e.currentTarget.value,
                  checked: e.currentTarget.checked,
                })
              }
            />{" "}
            <span className="mr-4">CC: </span>
            <br />
            <InputGroup.Checkbox
              value="paypal"
              onChange={(e) =>
                handleFilter({
                  name: e.currentTarget.value,
                  checked: e.currentTarget.checked,
                })
              }
            />{" "}
            <span className="mr-4">Paypal </span>
            <br />
            <InputGroup.Checkbox
              value="check"
              onChange={(e) =>
                handleFilter({
                  name: e.currentTarget.value,
                  checked: e.currentTarget.checked,
                })
              }
            />{" "}
            <span className="mr-4">Check </span>
            <br />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading ? (
            <div className="d-flex w-100 justify-content-center align-items-center">
              <Spinner animation="border" className="text-center" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <CardColumns className="">
              {profiles.map((profile, i) => (
                <ProfileCard key={i} {...profile} />
              ))}
            </CardColumns>
          )}

          {isError ? <p className="text-danger text-center">Something went wrong, please refresh...</p> : ""}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center p-5">
            <p className="mr-4">
              SHOWING PAGE {page + 1} OUT OF {numberOfPages}
            </p>
            <PaginationControls
              total={numberOfPages}
              page={page}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profiles;
