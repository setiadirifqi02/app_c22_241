/* eslint-disable react/prop-types */
import React from 'react';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import ActionDeleteButton from '../ActionDeleteButton';
import ActionEditButton from '../ActionEditButton';

function ParentDetail({
  momName,
  momJob,
  momPhoneNumber,
  dadName,
  dadJob,
  dadPhoneNumber,
  phoneNumber,
  address,
  id,
  onDelete,
}) {
  return (
    <div className="children-detail">
      <div className="jumbotron jumbotron-fluid py-5 text-white">
        <div className="container mt-5">
          <h1 className="display-6">
            Detail Informasi, Ibu&nbsp;
            <span>{momName}</span>
          </h1>
          <p className="lead">Disini anda bisa melihat semua informasi yang ada mengenai orang tua balita di Kelurahan Majakerta.</p>
        </div>
      </div>
      <Container className="py-5 text-black">
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="order-sm-2 order-md-1">
            <h4 className="py-4">Informasi Ibu Balita</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Ibu: </td>
                  <td>{momName}</td>
                </tr>
                <tr>
                  <td>Pekerjaan Ibu: </td>
                  <td>{momJob}</td>
                </tr>
                <tr>
                  <td>No. Telepone: </td>
                  <td>{momPhoneNumber}</td>
                </tr>
              </tbody>
            </Table>

            <h4 className="py-4">Informasi Ayah Balita</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Nama Ayah: </td>
                  <td>{dadName}</td>
                </tr>
                <tr>
                  <td>Pekerjaan Ayah: </td>
                  <td>{dadJob}</td>
                </tr>
                <tr>
                  <td>No. Telepone: </td>
                  <td>{dadPhoneNumber}</td>
                </tr>
              </tbody>
            </Table>

            <h4 className="py-4">Informasi Lain</h4>
            <Table responsive="sm">
              <tbody>
                <tr>
                  <td>Telephone Rumah: </td>
                  <td>{phoneNumber}</td>
                </tr>
                <tr>
                  <td>Alamat </td>
                  <td>{address}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={6} className="text-center py-4 order-sm-1 order-md-2">
            <FontAwesomeIcon icon={faHouseChimneyUser} className="fa-custom-style-2" />
            <Row className="justify-content-center action-button py-3 px-3 mt-3">
              <Col xs={12} sm={12} md={12} lg={3} />
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionDeleteButton id={id} onDelete={onDelete} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                <ActionEditButton link={`/parents-data/${id}/edit-parent`} />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3} />
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ParentDetail;
