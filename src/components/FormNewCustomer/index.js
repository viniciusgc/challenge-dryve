import React, { useState } from "react";
import { CForm, CRow, CCol, CInput, CFormGroup, CSelect } from "@coreui/react";
import "./style.scss";

const FormNewCustomer = () => {
  const [phones, setPhones] = useState([]);

  return (
    <CRow>
      <CCol xl="6">
        <CForm action="" method="post" className="form-customer">
          <CFormGroup>
            <CRow className="mt-4">
              <CCol>
                <CInput type="text" placeholder="Nome" size="lg" />
              </CCol>
              <CCol>
                <CInput type="text" placeholder="Sobrenome" size="lg" />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol>
                <CInput type="email" placeholder="E-mail" size="lg" />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow className="align-items-center">
              <CCol>
                <CInput type="text" placeholder="Telefone" size="lg" />
              </CCol>
              <CCol>
                <btn
                  onClick={() => setPhones([...phones, 1])}
                  className="adicionar-outro"
                >
                  + adicionar outro
                </btn>
              </CCol>
            </CRow>
          </CFormGroup>
          {phones.map(() => (
            <CFormGroup>
              <CRow className="align-items-center">
                <CCol md="6">
                  <CInput type="text" placeholder="Telefone" size="lg" />
                </CCol>
              </CRow>
            </CFormGroup>
          ))}

          <CFormGroup>
            <CRow>
              <CCol md="6">
                <CInput type="text" placeholder="CEP" size="lg" />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol>
                <CInput
                  type="text"
                  placeholder="Endereço"
                  size="lg"
                  className="input-invisible"
                />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol>
                <CInput
                  type="text"
                  placeholder="Número"
                  size="lg"
                  className="input-invisible"
                />
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  placeholder="Complemento"
                  size="lg"
                  className="input-invisible"
                />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol>
                <CInput
                  type="text"
                  placeholder="Bairro"
                  size="lg"
                  className="input-invisible"
                />
              </CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol>
                <CInput
                  type="text"
                  placeholder="Cidade"
                  size="lg"
                  className="input-invisible"
                />
              </CCol>
              <CCol>
                <CSelect
                  type="text"
                  placeholder="Complemento"
                  size="lg"
                  className="input-invisible"
                >
                  <option>Estado</option>
                  <option>SP</option>
                  <option>RJ</option>
                </CSelect>
              </CCol>
            </CRow>
          </CFormGroup>
        </CForm>
      </CCol>
    </CRow>
  );
};

export default FormNewCustomer;
