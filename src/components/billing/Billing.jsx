import { Link } from 'react-router-dom';
import styles from './bill.module.css';
import { auth, db } from '../../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Billing = () => {
  const [invoices, setInvoices] = useState([]);
  const [billing, setBilling] = useState([]);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const invoiceCollectionRef = collection(db, 'invoice');
  const billingCollectionRef = collection(db, 'billing');

  useEffect(() => {
    const getInvoices = async () => {
      const data = await getDocs(invoiceCollectionRef);
      setInvoices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getInvoices();
  }, []);

  useEffect(() => {
    const getBilling = async () => {
      const res = await getDocs(billingCollectionRef);
      setBilling(
        res.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
      );
    };
    getBilling();
  }, []);

  const logOut = async () => {
    await signOut(auth);
    alert('logged out succesfully');
  };

  return (
    <section className={styles.billsection}>
      <nav className={styles.navbar}>
        <div className={styles.upContainer}>
          <h3 className={styles.upContainerh3}>{user?.email}</h3>
        </div>

        <div className={styles.lowerContainer}>
          <div className={styles.bar}>
            <img src="../../../public/search1.png" alt="img" />
            <input
              className={styles.input}
              type="text"
              placeholder="search here.."
            />
          </div>
          <div className={styles.signinContainer}>
            <img src="../../../public/person.png" alt="img" />
            {!user ? (
              <Link to="/login" className={styles.signin}>
                SignIn
              </Link>
            ) : (
              <Link
                onClick={logOut}
                to="/pageContent/dashboard"
                className={styles.signin}
              >
                Logout
              </Link>
            )}
          </div>
          <div className={styles.lastContainer}>
            <Link>
              <img src="../../../public/settings.png" alt="img" />
            </Link>
            <Link>
              <img src="../../../public/bell.png" alt="img" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <div className={styles.heroSection}>
        <div className={styles.upperFolder}>
          <div className={styles.objectFit}>
            <div className={styles.salaryFolder}>
              <div className={styles.cardpicFolder}>
                <img
                  className={styles.cardpicimg}
                  src="../../../public/creditcard.png"
                  alt="Atm card pic"
                />
              </div>
              <div className={styles.subSalaryfolder}>
                <div className={styles.walletImgContainer}>
                  <img
                    className={styles.walletpic}
                    src="../../../public/wallet.png"
                    alt="wallet img"
                  />
                </div>
                <div className={styles.salPalDiv}>
                  <h3>Salary</h3>
                  <p>Belong Interactive</p>
                </div>

                <h4>+$2000</h4>
              </div>
              <div className={styles.subSalaryfolder}>
                <div className={styles.walletImgContainer}>
                  <img
                    className={styles.walletpic}
                    src="../../../public/paypal.png"
                    alt="paypal img"
                  />
                </div>
                <div className={styles.salPalDiv}>
                  <h3>Paypal</h3>
                  <p>Freelance Payment</p>
                </div>
                <h4>+$450</h4>
              </div>
            </div>
            {/* payment search section */}
            <div className={styles.searchFolder}>
              <div className={styles.subSearchFolders}>
                <h3 className={styles.invoiceH3}>Payment Method</h3>
                <div className={styles.cardInputContainer}>
                  <img src="../../../public/mastercard.png" alt="card img" />
                  <input className={styles.searchInputs} type="number" />
                  <img src="../../../public/edit.png" alt="penicon" />
                </div>
              </div>
              <div className={styles.subSearchFolders}>
                <button className={styles.addCardBtn}>ADD A NEW CARD</button>
                <div className={styles.cardInputContainer}>
                  <img src="../../../public/visa.png" alt="visalogo" />
                  <input className={styles.searchInputs} type="number" />
                  <img src="../../../public/edit.png" alt="pen icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Section */}

          <div className={styles.invoiceFolder}>
            <div className={styles.invoiceHeader}>
              <h3 className={styles.invoiceH3}>Invoices</h3>
              <button className={styles.invoicesBtn}>VIEW ALL</button>
            </div>
            {invoices.map((invoice) => {
              return (
                <div key={invoice.id} className={styles.invoiceDesc}>
                  <div>
                    <h4>{invoice.date}</h4>
                    <span className={styles.grey}>{invoice.invoice}</span>
                  </div>
                  <div className={styles.pdfFolder}>
                    <h4 className={styles.grey}>${invoice.bill}</h4>
                    <h5>PDF</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* lower Container */}

        <div className={styles.loweredContainer}>
          <div className={styles.billingContainer}>
            <h2 className={styles.billH2}>Billing Information</h2>
            {billing.map((bill) => {
              return (
                <div key={bill.id} className={styles.CustomerInfoContainer}>
                  <div>
                    <h3>{bill.customer}</h3>
                    <div className={styles.customerInfo}>
                      <h4 className={styles.grey}>Company Name</h4>
                      <h4>{bill.company}</h4>
                    </div>
                    <div className={styles.customerInfo}>
                      <h4 className={styles.grey}>Email Address</h4>
                      <h4>{bill.email}</h4>
                    </div>
                    <div className={styles.customerInfo}>
                      <h4 className={styles.grey}>VAT</h4>
                      <h4>{bill.vat}</h4>
                    </div>
                  </div>
                  <div className={styles.editDeleteContainer}>
                    <div className={styles.delete}>
                      <img
                        className={styles.imgDel}
                        src="../../../public/delete.png"
                        alt=""
                      />
                      <h5>Delete</h5>
                    </div>
                    <div className={styles.edit}>
                      <img src="../../../public/edit.png" alt="" />
                      <h5>Edit</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.transactionFolder}>
            <img src="../../../public/transaction.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
