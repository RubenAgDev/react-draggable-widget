import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsWidget.css';

const WIDGET_CSS_CLASS = 'widget';
const OVER_CSS_CLASS = 'over';
const DRAGGING_CSS_CLASS = 'dragging';

export default (WrappedComponent, settingsList) => {
    class AsWidget extends React.Component {
        constructor(props) {
            super(props);

            this.handleDragOver = this.handleDragOver.bind(this);
            this.handleDrop = this.handleDrop.bind(this);

            this.handleDragStart = this.handleDragStart.bind(this);
            this.handleDragEnter = this.handleDragEnter.bind(this);

            this.handleSettingsClick = this.handleSettingsClick.bind(this);
            this.handleClose = this.handleClose.bind(this);
        }

        handleDragOver(event) {
            event.preventDefault(); // Necessary for allowing to drop.
        }

        handleDrop(event) {
            if (event.stopPropagation) {
                event.stopPropagation(); // Stops the browser from redirecting
            }

            this.props.onDrop(this.props.id);
        }

        handleDragStart() {
            this.props.onDrag(this.props.id);
        }

        handleDragEnter() {
            this.props.onDragEnter(this.props.id);
        }

        handleSettingsClick() {
            this.props.onSettingsClick(this.props.id);
        }

        handleClose() {
            this.props.onClose(this.props.gridIndex);
        }

        settings() {
            return <ul>{ settingsList.map((item, index) => <li key={index}>{item}</li>) }</ul>;
        }

        render(){
            let articleCssClass = WIDGET_CSS_CLASS;
            
            if (this.props.widgetDrag === this.props.id) {
                articleCssClass = `${WIDGET_CSS_CLASS} ${DRAGGING_CSS_CLASS}`;
            } else if (this.props.widgetDragEnter === this.props.id) {
                articleCssClass = `${WIDGET_CSS_CLASS} ${OVER_CSS_CLASS}`;
            }

            return (
                <article
                    className={articleCssClass}
                    draggable="true"
                    id={this.props.id}
                    style={styles.container}
                    onDragStart={this.handleDragStart}
                    onDragEnter={this.handleDragEnter}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDrop}>
                    <div 
                        className="w-settings" 
                        style={this.props.widgetExpanded === this.props.id ? styles.settingsExpanded : styles.settingsCollapsed}>
                        {
                            settingsList ? this.settings() : <span>There are no configurable options for this widget</span>
                        }
                    </div>
                    <ul className="w-toolbox" style={styles.toolbox}>
                        <li
                            onClick={this.handleSettingsClick}
                            style={styles.toolboxItem}>
                            <i className="fa fa-cog" aria-hidden="true"></i>                             
                        </li>
                        <li
                            onClick={this.handleClose}
                            style={styles.toolboxItem}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </li>
                    </ul>
                    <WrappedComponent {...this.props} />
                </article>
            );
        }
    }

    AsWidget.propTypes = {
        id: PropTypes.string.isRequired,
        gridIndex: PropTypes.number.isRequired,
        onClose: PropTypes.func.isRequired,
        onDrag: PropTypes.func.isRequired,
        onDragEnter: PropTypes.func.isRequired,
        onDrop: PropTypes.func.isRequired,
        onSettingsClick: PropTypes.func.isRequired,
        widgetDrag: PropTypes.string.isRequired,
        widgetDragEnter: PropTypes.string.isRequired,
        widgetExpanded: PropTypes.string.isRequired
    }

    return AsWidget;
};
