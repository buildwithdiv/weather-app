const NoResultsDiv = () => {
  return (
    <div className="no-results">
        <img src="public/icons/no-result 4.23.59 AM.svg" alt="Error Icon" className="error-icon" />
      <h3 className="title">Something went wrong!</h3>
      <p className="message">We&apos;re unable to retrieve the weather details. Enure you&apos;ve entered a valid city or try again later.</p>
    </div>
  );
};
export default NoResultsDiv;