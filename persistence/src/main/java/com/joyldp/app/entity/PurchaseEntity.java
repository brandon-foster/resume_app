package com.joyldp.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "purchase_entity")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseEntity {
    @Column(name = "pe_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long peId;
    @Column(name = "pe_date")
    private String peDate;
    @Column(name = "pe_dollars")
    private String peDollars;
    @Column(name = "pe_tag_string")
    private String peTagString;
}

