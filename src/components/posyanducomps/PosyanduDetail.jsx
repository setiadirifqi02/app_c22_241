/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
} from 'react-bootstrap';
import ActionDeleteButton from '../ActionDeleteButton';
import ActionEditButton from '../ActionEditButton';

function PosyanduDetail({
  bidanId,
  namePosyandu,
  address,
  leader,
  coLeader,
  secretary,
  treasurer,
  eventDate,
  id,
  onDelete,
}) {
  return (
    <div className="posyandu-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Informasi Lengkap&nbsp;
            <span>{namePosyandu}</span>
          </h1>
          <p className="lead">
            Disini anda dapat melihat semua informasi mengenai posyandu&nbsp;
            {namePosyandu}
            &nbsp;yang berada di Kelurahan Majakerta.
          </p>
        </div>
      </div>
      <Container className="py-5 text-black" id="main-detal">
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="order-sm-2 order-md-1" id="main-detail__text">
            <h4 className="py-4">Informasi Kader</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Ketua: </td>
                  <td>{leader}</td>
                </tr>
                <tr>
                  <td>
                    <Button
                      as={Link}
                      to={`/bidans-data/${bidanId}`}
                      variant="primary"
                      aria-label="lihat detail informasi bidan"
                      className="my-2"
                    >
                      Lihat Detail
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Wakil Ketua: </td>
                  <td>{coLeader}</td>
                </tr>
                <tr>
                  <td>Sekretaris: </td>
                  <td>{secretary}</td>
                </tr>
                <tr>
                  <td>Bendahara: </td>
                  <td>{treasurer}</td>
                </tr>
              </tbody>
            </Table>

            <h4 className="py-4">Informasi Posyandu</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Alamat: </td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>Tanggal Kegiatan </td>
                  <td>{eventDate}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={6} className="text-center py-4 order-sm-1 order-md-2" id="main-detail__hero-action">
            <FontAwesomeIcon icon={faHospitalUser} className=" fa-custom-style-2" />
            <Row className="justify-content-center action-button py-3 px-3 mt-3">
              <Col xs={12} sm={12} md={12} lg={3} />
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionDeleteButton id={id} onDelete={onDelete} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionEditButton link={`/posyandus-data/${id}/edit-posyandu`} />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PosyanduDetail;
