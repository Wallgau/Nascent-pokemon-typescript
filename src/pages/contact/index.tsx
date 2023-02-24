import { v4 } from 'uuid';
import Pagination from '../../components/pagination';
import Input from '../../components/input';
import fields from './fieldData';

const Contact = () => (
  <>
    <form>
      {fields.map((field) => (
        <Input
          key={v4()}
          fieldName={field.fieldName}
          type={field.type}
          required={field.required}
          pattern={field.pattern}
          placeholder={field.placeholder}
          errorMessage={field.errorMessage}
        />
      ))}
    </form>
    <Pagination
      currentPage={1}
      numberOfPages={3}
      pageLinks={['/contact', '/pokemon', '/review']}
    />
  </>
);
export default Contact;
