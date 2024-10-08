CREATE DATABASE service_gate;

use service_gate;

create table if not exists slots(
  id varchar(20) not null,
  mode varchar(20) not null,
  status varchar(20) default "created",
  actived boolean default false,
  seller_id varchar(20) not null,
  seller_pubkeyhash varchar(100) default null,
  buyer_id varchar(20) default null,
  buyer_pubkeyhash varchar(100) default null,
  contract_id varchar(100) not null,
  contract_wid varchar(100) not null,
  contract_units int unsigned not null,
  contract_price int unsigned not null,
  contract_collateral int unsigned not null,
  contract_stage varchar(20) default "inactive",
  contract_state int unsigned default 0,
  contract_status_0 mediumtext default null,
  contract_status_1 mediumtext default null,
  contract_status_2 mediumtext default null,
  contract_status_3 mediumtext default null,
  contract_status_4 mediumtext default null,
  contract_status_5 mediumtext default null,
  contract_utx_0 mediumtext default null,
  contract_utx_1 mediumtext default null,
  contract_utx_2 mediumtext default null,
  contract_utx_3 mediumtext default null,
  contract_utx_4 mediumtext default null,
  contract_utx_5 mediumtext default null,
  product_id varchar(20) not null,
  product_price int unsigned not null,
  product_collateral int unsigned not null,
  product_discount int unsigned not null,
  created_at timestamp default current_timestamp,
  schema_t timestamp default current_timestamp,
  schema_v int unsigned not null,
  primary key(id),
  unique (contract_id)
) ENGINE = InnoDB;