import { Pipe, PipeTransform } from '@angular/core';
import { Connection } from '../model/connection';

@Pipe({
  name: 'accepted'
})
export class AcceptedPipe implements PipeTransform {

  transform(connections: Connection[] | null, accepted: boolean): Connection[] | null {
    if (!Array.isArray(connections) || !accepted) {
      return connections
    }
    return connections.filter(connection => connection.accepted === true)
  }
}
