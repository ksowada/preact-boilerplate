//
// # CellFactory: generate Cell instances
// date: 171226  edit: 171226 version: 1.0 so
//
import OpenCell from './OpenCell';
import RouteCell from './RouteCell';
import BrothersCell from './BrothersCell';
import ChildsCell from './ChildsCell';
import ContentCell from './ContentCell';
import DefaultCell from './DefaultCell';

// use to generate specific Cell Object by opts.creator
export function create(opts) {
	if (opts.creator === 'open'    ) return new OpenCell (opts);
	if (opts.creator === 'route'   ) return new RouteCell(opts);
	if (opts.creator === 'brothers') return new BrothersCell (opts);
	if (opts.creator === 'childs'  ) return new ChildsCell (opts);
	if (opts.creator === 'content' ) return new ContentCell (opts);
	// default
	return new DefaultCell (opts);
}
