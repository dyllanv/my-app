import React from 'react';
import Modal from 'react-bootstrap/Modal'


function ModalPopup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Wastegram App Demo</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="https://i.ibb.co/1MB65Q5/wastegram.gif"></img>
        </Modal.Body>
        <Modal.Footer>
          <button class="btn" onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
}

function ModalPopup2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Xiangqi Story Time</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
                I had two of my biggest programming takeaways come from this project: Plan out your project before coding, 
                and classes are your friend (*Object-Oriented Programming has entered the chat*). Having made a couple tic-tac-toe like games prior 
                to this, I made the project nearly entirely within arrays and with indexing. It wasn't until well after the 20-30 hour mark of coding 
                that I realized I hadn't fully thought through how I would account for generals being in check, checkmate, or stalemate. Ironically, this left me
                in a stalemate. While I could have brute-forced a wildly inefficient solution, I realized that keeping track of the possible moves for 
                each piece would be much simpler, but would require restructuring my entire project with a more efficient use of classes. Each time a piece
                moves, update its possible moves (per the piece's movement rules, even if the move would be invalid for other reasons). After said move,
                check all live pieces and either confirm it does not leave a general in check or that there is a possible move that can be made (not
                a stalemate). When checking for 'checkmate', this was also useful in making sure whether or not there were moves that could protect the general. 
          </p>
          <p>Moral of the story: Plan ahead, and well designed classes are great for tracking very useful information.</p>
        </Modal.Body>
        <Modal.Footer>
          <button class="btn" onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
}


const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modal2Show, setModal2Show] = React.useState(false);
    const [modal3Show, setModal3Show] = React.useState(false);
    return (
        <div>
            <span id="projects"></span>
            <section data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 class="heading">Projects</h1>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://i.ibb.co/ck6TY8c/Capture.png"></img>
                        </div>
                        <div class="description">
                            <h3>Pet Adoption Website</h3>
                            <p>
                                For this group project, I fully designed and engineered the backend. I used NodeJS and Express to implement
                                the API, AWS RDS to host the database, AWS S3 to host images, and AWS Elastic Beanstalk to host the server.
                                I also used Google's Geocode API to get lat/lng coordinates of locations in order to locate pets within a given
                                search radius (using the Haversine formula). The frontend framework and logic was designed by my two group members 
                                (Aaron Dematta and Zach Khan), while the UI was designed and implemented by me.
                            </p>
                            <p>JavaScript, NodeJS, Express, MySQL, AWS, HTML, CSS, React</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/AdoptPets-WebApp">GitHub</a>
                                <a href="http://confused-children.surge.sh/userdash">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://i.ibb.co/CBsNJHm/boats.png"></img>
                        </div>
                        <div class="description">
                            <h3>RESTful API: Shipping Management</h3>
                            <p>
                                For this project, I designed and implemented a RESTful API and an OAuth 2.0 process. The project is written in Python and
                                uses the Flask framework. The self-implemented OAuth process doesn't use any libraries, but uses the Google People API to 
                                authorize/authenticate the user. The API is hosted on the Google Cloud Platform and used Google's NoSQL Datastore to store 
                                data. The website link below will bring you to the OAuth login page. After logging in and allowing access to your Google 
                                account (only your name and user ID will be used), you will be given a JSON web token, which you can then use to create, read, 
                                update, and delete 'boats' and 'loads'. Read the API doc on GitHub for more information. A test environment and test collection
                                were created using Postman, which are also provided in the GitHub repository.                      
                            </p>
                            <p>Python, Flask, OAuth 2.0, NoSQL, Google Cloud Platform, Postman</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/RESTful-API-GCP">GitHub</a>
                                <a href="https://cs493-portfolio-314720.wl.r.appspot.com/">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://i.ibb.co/x1kQpBv/wastegram.png"></img>
                        </div>
                        <div class="description">
                            <h3>Wastegram App</h3>
                            <p>
                                This cross-platform mobile app was made using the Dart programming language with Google's Flutter SDK. Data is stored with
                                Google's Firestore, while images are stored with Firebase. It functions as an Instagram-like app, where a user creates posts 
                                with a photo and other information (an input integer and the device's location). The app is designed for a 
                                cafe/bakery, to monitor how many pastries or other items are wasted at the end of the shift/night.                     
                            </p>
                            <p>Dart, Flutter, NoSQL, Google Cloud Platform</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/Wastegram">GitHub</a>
                                <button class="btn" onClick={() => setModalShow(true)}>Demo</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://i.ibb.co/qYs5WmT/sudoku.png"></img>
                        </div>
                        <div class="description">
                            <h3>Sudoku Solution Checker</h3>
                            <p>
                                For this project in my algorithms course, I created a program that determines if a given sudoku solution is valid (it does
                                not solve incomplete sudoku puzzles). This is a known NP-Complete (nondeterministic polynomial-time complete) problem, which
                                essentially means it can be done in polynomial time, and every other NP problem can be reduced to this problem in polynomial time.
                                <br></br>
                                More information on NP-Completeness can be found here: <a href="https://en.wikipedia.org/wiki/NP-completeness">NP-Completeness</a>
                                <br></br>
                                The code for this program and a more in-depth analysis of the problem can be found by following the links below.
                            </p>
                            <p>Python, Algorithms</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/SudokuChecker/blob/master/sudoku.py">Code</a>
                                <a href="https://github.com/dyllanv/SudokuChecker/blob/master/hw6.pdf">Algorithm Analysis</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://i.ibb.co/d586TJY/hospital.png"></img>
                        </div>
                        <div class="description">
                            <h3>Hospital Management System</h3>
                            <p>
                                This project was built using Python, the Flask framework, and a MySQL database. The frontend was built with pure HTML
                                with minimal CSS. I chose to build a hospital management system as a tool to help keep track of certain hospital staff
                                and patients, to be used by the hospital staff. This program allows doctors and nurses to easily access which patients 
                                they are assigned (or find other patients's providers when needed). It also allows them to assign patients new providers
                                at shift change. While this project could benefit greatly from a better UX/UI design, the purpose was to gain a better 
                                understanding of how to design, implement, and use a relational database. This project was cretaed in summer 2020, but 
                                is no longer live.
                            </p>
                            <p>Python, Flask, MySQL, HTML</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/HospitalDatabase">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="project">
                        <div class="pic">
                            <span class="helper"></span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Xiangqi_Board.svg/1200px-Xiangqi_Board.svg.png"></img>
                        </div>
                        <div class="description">
                            <h3>Xiangqi Board Game</h3>
                            <p>
                                This was one of my earlier projects (winter 2020), but was really fun to make. Xiangqi, also know as Chinese Chess, is a board game much 
                                like, well, chess. 
                                The description and rules of the game can be found here: <a href="https://en.wikipedia.org/wiki/Xiangqi">Xiangqi Board Game</a> 
                                <br></br>
                                The program only includes the game logic and game flow, with no real frontend, but I did create a makeshift board to be displayed
                                after each turn is made. This was written in Python, and aided in my understanding of object-oriented design.
                            </p>
                            <p>Python, Object-Oriented Design</p>
                            <div class="buttons">
                                <a href="https://github.com/dyllanv/XiangqiGame">GitHub</a>
                                <button class="btn" onClick={() => setModal2Show(true)}>Story Time!</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <ModalPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ModalPopup2
                show={modal2Show}
                onHide={() => setModal2Show(false)}
            />
        </div>
    )
}

export default Projects;