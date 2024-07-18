import { CanActivateFn } from '@angular/router';

export const adminroleGuard: CanActivateFn = (route, state) => {
if(localStorage.getItem("usertype")=="admin"){
  return true;

}

else{
  return false;
}
};

