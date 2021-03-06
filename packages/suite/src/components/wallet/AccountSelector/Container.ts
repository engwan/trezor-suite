import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routerActions from '@suite-actions/routerActions';

import { AppState, Dispatch } from '@suite-types';
import Component from './index';

const mapStateToProps = (state: AppState) => ({
    selectedAccount: state.wallet.selectedAccount,
    accounts: state.wallet.accounts,
    router: state.router,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            goto: routerActions.goto,
        },
        dispatch,
    );

export type StateProps = ReturnType<typeof mapStateToProps>;
export type DispatchProps = ReturnType<typeof mapDispatchToProps>;

interface ComponentProps extends StateProps {
    title: string;
}

export type Props = ComponentProps & DispatchProps;

export default connect(mapStateToProps, mapDispatchToProps)(Component);
