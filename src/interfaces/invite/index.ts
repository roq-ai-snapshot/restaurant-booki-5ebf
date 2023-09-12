import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  status: string;
  inviter_id: string;
  invitee_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user_invite_inviter_idTouser?: UserInterface;
  user_invite_invitee_idTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  inviter_id?: string;
  invitee_id?: string;
  restaurant_id?: string;
}
