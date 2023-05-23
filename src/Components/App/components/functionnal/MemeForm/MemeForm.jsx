import React , { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import * as BS from 'react-bootstrap';

const initialState= {}
/**
 * memeForm component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const MemeForm = (props) => {

  useEffect(() => {
    console.log('MemeForm mounted')
  },[]);

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
        <BS.Form onSubmit={(event) => {
            event.preventDefault();
          }}>
          <BS.Row>
            <BS.Col>
              <BS.Form.Label htmlFor="titre">Title</BS.Form.Label>
              <BS.Form.Control name="titre" id="titre" value={ props.meme.titre } onChange={(event) => {
                props.onMemeChange({...props.meme,titre: event.target.value});
              }}/>
              <BS.Form.Label>Image</BS.Form.Label>
              <BS.Form.Select name="image" id="image">
                <option value="-1">No-image</option>
              </BS.Form.Select>
            </BS.Col>
          </BS.Row>
          <hr/>
          <BS.Row>
            <BS.Col>
              <BS.Form.Label htmlFor="text">Texte</BS.Form.Label>
              <BS.Form.Control name="text" id="text" value={ props.meme.text } onChange={(event) => {
                props.onMemeChange({...props.meme,text: event.target.value});
              }}/>
            </BS.Col>
          </BS.Row>
          <BS.Row>
            <BS.Col xs lg="2"><BS.FormLabel htmlFor="x">X</BS.FormLabel></BS.Col>
            <BS.Col><BS.Form.Control name="x" id="x"  value={ props.meme.x } onChange={(event) => {
                props.onMemeChange({...props.meme,x: Number(event.target.value)});
              }}/></BS.Col>
            <BS.Col xs lg="2"><BS.FormLabel htmlFor="y">Y</BS.FormLabel></BS.Col>
            <BS.Col><BS.Form.Control name="y" id="y" value={ props.meme.y }onChange={(event) => {
                props.onMemeChange({...props.meme,y: Number(event.target.value)});
              }}/></BS.Col>
          </BS.Row>
          <hr/>
          <BS.Row>
            <BS.Col>
              <h2>Décorations</h2>
            </BS.Col>
          </BS.Row>
          <BS.Row>
              <BS.Col><BS.Form.Label htmlFor="color">Color</BS.Form.Label></BS.Col>
              <BS.Col><BS.Form.Control name="color" id="color" type="color" value={ props.meme.color } onChange={(event) => {
                props.onMemeChange({...props.meme,color: event.target.value});
              }}/></BS.Col>
          </BS.Row>
          <BS.Row>
              <BS.Col><BS.Form.Label htmlFor="fontSize">Font-Size</BS.Form.Label></BS.Col>
              <BS.Col><BS.Form.Control name="fontSize" id="fontSize" type="number" min="0" value={ props.meme.fontSize } onChange={(event) => {
                props.onMemeChange({...props.meme,fontSize: Number(event.target.value)});
              }}/></BS.Col>
          </BS.Row>
          <BS.Row>
              <BS.Col><BS.Form.Label htmlFor="fontWeight">Font-Weight</BS.Form.Label></BS.Col>
              <BS.Col><BS.Form.Control name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value={ props.meme.fontWeight } onChange={(event) => {
                props.onMemeChange({...props.meme,fontWeight: event.target.value});
              }}/></BS.Col>
          </BS.Row>
          <BS.Row>
              <BS.Col>
                  <BS.Form.Check
                      type="checkbox"
                      id="underline"
                      label="Underline"
                      checked={ props.meme.underline }
                      name="underline"
                      onChange={(event) => {
                        props.onMemeChange({...props.meme,underline: event.target.checked});
                      }}
                    />
              </BS.Col>
              <BS.Col>
                  <BS.Form.Check
                      type="checkbox"
                      id="italic"
                      label="italic"
                      checked={ props.meme.italic }
                      name="italic"
                      onChange={(event) => {
                        props.onMemeChange({...props.meme,italic: event.target.checked});
                      }}
                  />
              </BS.Col>
          </BS.Row>
          <hr />
          <BS.Row>
            <BS.Col>
              <BS.ButtonGroup>
                <BS.Button type="submit" variant="primary">Submit</BS.Button>
                <BS.Button type="reset" variant="danger">Reset</BS.Button>
              </BS.ButtonGroup>
            </BS.Col>
          </BS.Row>
        </BS.Form>
    </div>
  )
};

MemeForm.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.number,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    underline: PropTypes.bool.isRequired,
    italic: PropTypes.bool.isRequired,
    imageId: PropTypes.number.isRequired,
    frameSizeX: PropTypes.number.isRequired,
    frameSizeY: PropTypes.number.isRequired
  }).isRequired,
  onMemeChange: PropTypes.func.isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;
