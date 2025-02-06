import InputField from '../../atom/input/index';

const AgreementForm = () => (
  <form>
    <h3>Agreement Form</h3>
    <div>
      <span>
        <label>Search Institutions</label><br />
        <InputField type='search' name='institutionId' placeholder='Find your institution' />
      </span>
      <span>
        <label>Historical Days</label><br />
        <InputField type='text' name='maxHistoricalDays' placeholder='Select a number of historical days' />
      </span>
      <span>
        <label>Access Days</label><br />
        <InputField type='text' name='accessValidForDays' placeholder='Select a number of accessible days' />
      </span>
      <span>
        <label>Access Scopes</label><br />
        <InputField type='text' name='accessScope' placeholder='Select Access Scopes' />
      </span>
    </div>
  </form>
)

export default AgreementForm;